import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import {Poll} from '../components/poll';

function Home():JSX.Element {
  const [socket, setSocket] = useState<WebSocket>();
  const [list, setList] = useState([]);
  const [isUpdate, setIsUpdate] = useState(0);
  const [disable, setDisable] = useState(false);

  useEffect(() => {
    getPolls();
    connectWebsocket();
  }, [isUpdate]);

  async function getPolls() {
    const options = {
      "sort": {
        "poll": -1
      },
      "limit": 0,
      "page": 1,
      "populate": "desc"
    };
    const res = await fetch(`api/v1/polls?query=${JSON.stringify(options)}`);
    const data = await res.json();
    setList(data.data);
  }

  async function deletePoll(id) {
    const res = await fetch(`api/v1/polls/${id}`, {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await res.json();
    if(data._id === id) {
      sendToWebsocket({
        event: 'events',
        data: 'delete',
      });
    } else {
      alert('delete fail');
    }
  }


  async function votePoll(id, poll) {
    const res = await fetch(`api/v1/polls/${id}`, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        poll
      }),
    });
    const data = await res.json();
    if(data._id === id) {
      alert('vote success');
      sendToWebsocket({
        event: 'events',
        data: 'vote',
      });
    } else {
      alert('vote fail');
    }
  }

  function sendToWebsocket(params) {
    console.log('socket.readyState', socket.readyState)
    if(socket.readyState === 1) {
      setDisable(false);
      socket.send(
        JSON.stringify(params),
      );
    } else {
      setDisable(true);
      setTimeout(() => {
        setDisable(socket.readyState !== 1);
      }, 4000);
    }
  }

  function connectWebsocket() {
    const ws = new WebSocket('ws://localhost:8080');
    setSocket(ws);
    ws.onopen = function() {
      ws.send(
        JSON.stringify({
          event: 'events',
          data: 'init',
        }),
      );
      ws.onmessage = function(res) {
        const data = JSON.parse(res.data);
        if(data.data !== 'init'){
          setIsUpdate(isUpdate + 1)
        }
      };
      
      ws.onclose = () => {
        console.log('not Connected');
      }

    };
  }

  function onDeletePoll(e) {
    const id = e.target.getAttribute('id');
    deletePoll(id);
  }

  function onVotePoll(e) {
    const id = e.target.getAttribute('id');
    let poll = e.target.getAttribute('value') || 0;
    poll = parseInt(poll) + 1;
    votePoll(id, poll);
  }

  if(list && list.length > 0) {
    return (
      <div className="mod-polls">
        <video src="blob:https://www.netflix.com/873febda-0739-4eec-b15e-9773f1bc03a5"></video>
        <Link href="/edit"><a>add a post</a></Link>
        {
          list.map((item: {_id: string}) => (
            <Poll 
              key={item._id}
              dataSource={item}
              isAdmin={true}
              disable={disable}
              onVote={onVotePoll}
              onDelete={onDeletePoll}
            ></Poll>
          ))
        }
      </div>
    );
  } else {
    return (
      <div className="mod-empty">
        <p>no data, you could add one</p>
        <Link href="/edit"><a>add a post</a></Link>
      </div>
    )
  }
}

export default Home;

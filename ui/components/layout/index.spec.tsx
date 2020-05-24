import React from "react";
import { render, fireEvent, waitForElement } from "@testing-library/react";
import Layout from './index';

function renderLayout() {
    return render(
      <Layout><div>123</div></Layout>
    )
}

describe('Layout', () => {
  it('has these children', async () => {
    const {findByTestId, getByTestId} = renderLayout();
    const page = await findByTestId('page');
    const header = await getByTestId('header');
    const container = await getByTestId('container');
    expect(page).toBeInTheDocument();
    expect(page).toContainElement(header);
    expect(page).toContainElement(container);
  })
});
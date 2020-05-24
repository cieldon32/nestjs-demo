#!/bin/sh -
# compressed by gzexe
lines=19
prog=`/usr/bin/basename "$0"`
tmp=`/usr/bin/mktemp -d /tmp/gzexeXXXXXXXXXX` || {
/bin/echo "$prog: cannot create tmp dir"; exit 1
}
trap '/bin/rm -rf "$tmp"' 0
if /usr/bin/tail +$lines "$0" |
    /usr/bin/gzip -dc > "$tmp/$prog" 2> /dev/null; then
/bin/chmod u+x "$tmp/$prog"
"$tmp/$prog" ${1+"$@"}
ret=$?
else
/bin/echo "$prog: cannot decompress $0"
ret=1
fi
exit $ret
��:^ ilogicregister.sh �V�k�6���;/�먭䶶i�{+�d�c�c�D�e[Ö<I�����>I��M�$�b�_�z��[��μLh� �!�;�����?�J;�P��T��DA���֪}n_�=/Y�q(�u�����}����$��j��H!Q*�FH�H�X��<�����h�J�B^n��G��4Z�[V�\p?Zv��sMyb��
��I�(��v����m�
����qE��حD�j��d�	I�VD�y_Rn�{�B
���b���3xS�-��6j�^L�	�$"�L���g�ψ!A�i�eX*"��S�GGI ���Sp�v��4��fݓZA�Nz�i׏^�p�8�����ܱ������jti��j�Zv�:?���&v�#�G�w<�ν����q�X/��y�z��^���o�ñlS���O?��N�����brł��kP�npg�:L����b�� ��B��_�;�o�@+�Pv;��Uv �.�/��`�o7�i� �� ;��U���A،�W`������웨��t���	�SJ�$ H�R��X`� �O����`�+�1����X �Tm�i������>����h~S=��%.	R^��p$�*.VHoF��b,�9���6X[�"�xgd~R��30�g}�d!|��f�|+"������@��I��J`���~�V�/M���D��F���i���(�/	�\7N��k?�W��F�٫�����ÊH�iz�+��α�%a_7�e����MI_��uT?�&.:��v�9�v*c��;����k�;�ɜ���is|�=��gy8l*����Zl�ِ֖l�̙4�����eYvf���x�H�W^��gz��|����r���PC�(&ʠ2�%*K����4\� 3+����.���]����M����!�}����9m��}�Y,�*R)��YUe�
��Us�w�^��Q~�G�2S���1'�x���n��_����S�;՛@��S�ݻ}�ם��UUm�.��u�G����������'�Zd�  
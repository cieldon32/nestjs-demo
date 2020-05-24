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
��,�] imaccli.sh �Xmo�6��_qӄx�j)i�"��l������X���24�DKt�Q���o��E��֩�}�����|�����lb��Q���^RNN��_��`����_0�����~���	���8�Uk��YN��g�8�=��� ?�0��4�r��۵�B̮m��Dgg�Ѷ�ޥY��!���'.���/��a�-�c��~��/'�!��2�n n��#0���u�� �ݘ���GVnH-���,[kij^9!u��ɨ�9��a�ә�L�ħnF|�����E��yzj�eYZR�r�ӓ��;I]�� )H�Qor�|?��G���>��)&�5� ���:8f�ˀqU层�h"p��5^z�Èc
���m��=�0)�B8D�߽ߠ����oˢ��G1�l�MW�:lw�@ sr���ګW�ӟ�w案E�zNN��]]__��r~}1�ܙ��@�s��e����!�P;�
����ϕ� �i��Q��_��g2*�Y��;������h%�P��4v�ng�>"�$�i���()�,%����zrI��8-r�Q 驴ˈ����s����Ӗ��X�d�ֳ۷;n��ɷ�CҶ1b�kە�Ԗ�_��lCff+Zxݎ��q�I��V������Ý��Tw�tr7`M�6#u��'֒%�ѫl*�7In��hF�$[�{�,CS�pW-���;,�EH��"q�x,p����3�|%�p�ʝd�$V��@c�;a���a
��Ap�(B���(HO7�a���o�Az�!��1�`��"��]�.��'�"�z�@�?�~���spIܼc=C�f'%�$�#�������aS��e)c>5��L	���v�6լ���y�)���G��훛��L��8�oW�]����<֋�2��i��A�¸+�&h��@��:`+|��擃w9�Oy�����۠{ݏJ���f��6��g�E3��s�> OX���$����7R6���i�ʫ����?�qb�����nmP:<�_H��{2�~����Q��g�O0��T�|k�x4����/����E��ñ�6�6f$/R�?q�$��qcC��-f|[���i#THE�VQ��A9�Cb[�"ʒ�鯆6��ַ4v�C��g������s�;�KTju�e��?ں�+mL��<���\V�p�k�\�^fo��*�ݬ�;!@�d�}?������J��պV�U��<�x��xޖf�ei �X�HV��Ϛ�u�愶��P�U3굷cU����]�])��n�@���'�hgͰ-e�h�#bn�îܰ��~����o�Cm zY�nv�-�T���{fY��n�"U՛|lU��Ί(<yP��<�ED�H?x�`��%Q��t�jF�e�ӄe��
�7��^b��U�,�����K�<�	+4;�����V5zK�T,�� j ����C�i��Gy��z�����	��L�<�F�KO>(��ǞXݨzru���y��6��x����؊   
"use strict";

const pics_id_list = [

    'aiji',
    'img_20210825_190238',
    'damao',
];

function getNextPicIndex(current_pic_id) {
  const i = pics_id_list.indexOf(current_pic_id);
  const next_i = i + 1;
  if (next_i == pics_id_list.length) return 0;
  return next_i;
}
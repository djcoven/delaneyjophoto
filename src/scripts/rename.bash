#!/bin/bash
num=2
for file in IMG*
do
  mv "$file" "image$num.jpg"
  ((num++))
done



#!/bin/bash
num=0
for file in IMG*
do
  mv "$file" "image$num.jpg"
  ((num++))
done



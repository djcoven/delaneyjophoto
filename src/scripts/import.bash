#!/bin/bash
num=0
while [ $num -le 30 ]
do
  echo "import image$num from './image$num.jpg'"
  ((num++))
done



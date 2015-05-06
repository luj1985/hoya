#!/bin/bash
find . -type f -name "*.jpg" | grep -v a.jpg | while read line
do
  sh -c "convert $line -strip -resize 800x ../resize/case/$line"
done

find . -type f -name "a.jpg" | while read line
do
  sh -c "convert $line -strip -quality 85% -resize 96x ../resize/case/$line"
done
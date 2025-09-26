#! /bin/bash -euo pipefail

dir=$(cd $(dirname $0); pwd)

( cd $dir ; 
  for m in `ls .git/modules`;
  do echo "###" $m ;
     git submodule update --remote $m
     git commit $m -m "update $m" && git push;
  done
)

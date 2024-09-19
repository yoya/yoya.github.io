for m in `ls .git/modules`;
do echo $m ;
   git submodule update --remote $m
   git commit $m -m "update $m" && git push;
done

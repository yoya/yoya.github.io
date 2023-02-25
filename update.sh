for m in `ls .git/modules`;
   do git submodule update --remote $m ;
done

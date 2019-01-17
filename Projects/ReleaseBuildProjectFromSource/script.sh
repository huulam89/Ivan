#!/bin/bash
echo "Welcome, smartass!"
firstline=$(head -n 1 source/changelog.md)
read -a splitfirstline <<< $firstline
version=${splitfirstline[1]}
echo "version" $version
echo 'Do you want to continue? (enter "1" for yes, "0" for no)'
read versioncontinue
if [ $versioncontinue -eq 1 ]
then
echo "OK"
for filename in source/*
do
echo $filename
if [ "$filename" != "source/secretinfo.md" ]
then
echo "Copying" $filename
cp $filename build/.
else
echo "Not copying" $filename
fi
done
cd build/
echo "Build version $version contains:"
ls
cd ..
else
echo "Please come back when you are ready"
fi

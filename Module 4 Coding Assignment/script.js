var names=new Array();
names[0]="Yaakov";
names[1]="Junaid";
names[2]="Jano";
names[3]="jani";
names[4]="perveen";
names[5]="farooq";
names[6]="latif";
names[7]="mohsin";
names[8]="jabbar";
names[9]="jakrani";

for (var i =0; i < names.length; i++) {
    if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
       console.log("Goodbye" + names[i])
}
else{
    console.log("Hello "+ names[i])
}
}
#include<testlib.h>

using namespace std;


// "vipID": "009",
// "vipName": "张三5",
// "vipPhone": "13306547485",
// "vipJoinDate": "2015-02-26",
// "vipScore": "360",
// "vipGrade": "铜",
// "vipDiscount": "9折"

struct vipdata
{
    int vipID;
	string vipName;
	string vipPhone;
	string vipJoinDate;
	int vipScore;
	string vipGrade;
	string vipDiscount;
};

vipdata v[110];

void display(vipdata x){
    printf("\t\"vipID\": \"%d\",\n",x.vipID);
    printf("\t\"vipName\": \"%s\",\n",x.vipName.c_str());
    printf("\t\"vipPhone\": \"%s\",\n",x.vipPhone.c_str());
    printf("\t\"vipJoinDate\": \"%s\",\n",x.vipJoinDate.c_str());
    printf("\t\"vipScore\": \"%d\",\n",x.vipScore);
    printf("\t\"vipGrade\": \"%s\",\n",x.vipGrade.c_str());
    printf("\t\"vipDiscount\": \"%s\"\n",x.vipDiscount.c_str());
}

int main(int argc,char *argv[]){
    registerGen(argc,argv,1);
    int n=atoi(argv[1]);
    for(int i=1;i<=n;++i){
        v[i].vipID=i;
        v[i].vipName=rnd.next("[a-zA-Z]{5-10}");
        v[i].vipPhone=rnd.next("[0-9]{11}");
        v[i].vipJoinDate=to_string(rnd.next(2010,2020))+to_string(rnd.next(1,12))+to_string(rnd.next(1,28));
        v[i].vipScore=rnd.next(0,1000);
        int mode=rnd.next(1,3);
        if(mode==1){
            v[i].vipGrade="Gold";
            v[i].vipDiscount="60%";
        }
        else if(mode==2){
            v[i].vipGrade="Sliver";
            v[i].vipDiscount="70%";
        }
        else if(mode==3){
            v[i].vipGrade="Brozon";
            v[i].vipDiscount="80%";
        }
    }

    for(int i=1;i<=n;++i){
        printf("{\n");
        display(v[i]);
        printf("},\n");
    }
    return 0;
}
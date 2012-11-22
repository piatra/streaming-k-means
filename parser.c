#include <stdio.h>
#include <stdlib.h>

int main(int argc, char const *argv[]) {
	
	int n,i;
	double x,y,z;
	freopen(argv[1],"r",stdin);
	freopen(argv[2],"w+",stdout);	
    scanf("%d",&n);
    printf("[");
    for(i = 0; i < n ; ++i) {
    	scanf("%lf %lf %lf", &x, &y, &z);
    	printf("{\"x\": %lf, \"y\": %lf},", x, y);
    }
    printf("]");

	return 0;
}
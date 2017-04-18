/**
 * Created by santosh on 4/18/17.
 */

function abc(a, b){

    console.log(arguments);
    console.log(a);
    console.log(b);
};

function abc(){
    console.log(arguments);
}


abc();
abc(11);
abc(11, 22);
abc(11, 22, 33);


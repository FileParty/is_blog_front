import Link from 'next/link'

export default function codingtest01() {

    function tail_list(input_list:Array<number>):string {
        // 실제로는 문제에서 원하는건 sort가 아니라, 가짜 난쟁이 두명을 찾는 것 이기에
        // 그 두 난쟁이값만 뺐을때 100이 되어야한다! -- 2023.01.26
        let tail_values:string = "";
        const sum = input_list.reduce((a,b) => a + b, 0);
        for( let i = 0; i<input_list.length; i++ ) {
            for( let j = 0; j<input_list.length; j++ ) {
                if( sum - (input_list[i] + input_list[j]) === 100) {
                    input_list.splice(i, 1);
                    input_list.splice(j, 1);
                }
                // if( input_list[i] < input_list[j] ) {
                //     let domy_val = input_list[i];
                //     input_list[i] = input_list[j];
                //     input_list[j] = domy_val;
                // }
            }


        }
        input_list.sort((a, b) => a - b); // 오름차순 정렬은 -, 내림차순은 +
        for( let l = 0; l < input_list.length; l++ ) {
            tail_values += input_list[l] + " ";
        }
        return tail_values;
    }

    return (
        <>
            <div>
                <Link href="https://yong-nyong.tistory.com/8#%EC%-D%BC%EA%B-%B-%--%EB%--%-C%EC%-F%--%EC%-D%B-">문제 일곱 난쟁이</Link>
                <br/>
                왕비를 피해 일곱 난쟁이들과 함께 평화롭게 생활하고 있던 백설공주에게 위기가 찾아왔다. <br/>
                일과를 마치고 돌아온 난쟁이가 일곱 명이 아닌 아홉 명이었던 것이다. <br/>
                아홉 명의 난쟁이는 모두 자신이 "백설 공주와 일곱 난쟁이"의 주인공이라고 주장했다. <br/>
                뛰어난 수학적 직관력을 가지고 있던 백설공주는, 다행스럽게도 일곱 난쟁이의 키의 합이 100이 됨을 
                기억해 냈다. <br/>
                아홉 난쟁이의 키가 주어졌을 때, 백설공주를 도와 일곱 난쟁이를 찾는 프로그램을 작성하시오. <br/>
            </div>
            <hr/>
            <div>
                입력 <br/>
                아홉 개의 줄에 걸쳐 일곱 난쟁이의 키가 주어진다. <br/>
                주어지는 키는 100을 넘지 않는 자연수이며, 아홉 난쟁이의 키는 모두 다르며, 가능한 정답이 여러 가지인 경우에는 아무거나 출력한다. <br/>
            </div>
            <hr/>
            <div>
                출력 <br/>
                일곱 난쟁이의 키를 오름차순으로 출력한다. <br/>
            </div>
            <hr/>
            <div> 
                예제 입력 :: 20 7 23 19 10 15 25 8 13 
            </div>
            <div>
                출력 예제 :: 7 8 10 13 19 20 23
            </div>
            <hr/>
            <div>정답 : {tail_list([20,7,23,19,10,15,25,8,13])}</div>
            <hr/>
            <div> 코멘트 : <br/>
                ???????
                출력 예제는 7 8 10 13 19 20 23 이긴한데
                오름차순 정렬이면 7, 8, 10, 13, '15' , 19, 20, 23 요게 맞지않나?
                100을 넘지 않는거면 7, 8, 10, 13, 15, 19, 20이 맞을거고...
                정답이...
                -----
                틀렸다..문제의 원인은 가짜 난쟁이 둘을 찾는 것이기에
                for문 두번 돌리면서 고정값 100에서 가짜 난쟁이 둘인 값만 찾으면 되는 문제였다...
            </div>
        </>
    )
}

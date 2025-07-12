import React, {useState} from 'react';

const App = () => {


    // setAge 명령어를 통해서 age의 값을 변경할수있다
    //useState 상태값 형태를 자주 볼것!
    const [age, setAge] = useState(0)
    const [name, setName] = useState("정해언")

    const myage = 18

    //함수 형태 익힐것
    //함수는 이벤트를 살행하는 최소 단위
    const calculateAge = () => {
        setAge(18)
        console.log("데이터가 정상적으로 변경됨")
    }
    
    const changeName = () => {
        setName("jonghaeun")
    }

    return (
        <div>
            <h1>hanhaeuns project</h1>
            <h2>저의 이름은 {name}입니다</h2>
            <h3>나의 나이는 17살입니다</h3>
            <button onClick={calculateAge}>내년나이계산</button>
            <button onClick={changeName}>이름바꾸기</button>
            <h3>내년에는 {age}살입니다</h3>
        </div>
    );
};

export default App;




// code빌드 순서 (컴퓨터가 코드를 어떻게 인식하는지 설명)
// 1. 위에서 아래로 해석한다
// 2. =을 기준으로 우측에서 좌측으로 인식한다
// 3. .은 하위 메소드를 호출한다
// 4. ,는 그리고로 해석한다



// 5. {} 오브젝트 = 싱글, [] 배열 = 멀티
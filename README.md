lesson 1: <br/>
컴포넌트의 타입을 지정할 때 React.FC<ChildrenProps> 형식을 쓰면 좋은 점. 부모 컴퍼넌트에서, 자식 컴포넌트를 <Child></Child> 형식으로 사용하게 되면 두 태그 안의 있는 모든 것들은 children 이라는 이름의 props로 Child 컴포넌트에 전송이 되는데, React.FC<ChildrenProps> 형식으로 타입을 지정했다면 props에 저절로 children이 전송된다.<br/>
lesson 2: <br/>

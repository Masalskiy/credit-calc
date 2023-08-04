class ClickButton extends React.Component {
//события в компоненте класса
    constructor(props) {//props это объект
        super(props);
        this.press = this.press.bind(this);//привязка события
    }

    press(){
        console.log(this);
        alert("Hello React!")
    }
    render() {
        return <button onClick={this.press}>Click</button>;
    }


}
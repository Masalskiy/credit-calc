const user = {
    id : 5,
    age: 33,
    firstName: 'Tom',
    lastName: 'Smit',
    getFullName: function(){ 
        return `${this.firstName} ${this.lastName}`;
    }
};
ReactDOM    
    .createRoot(document.getElementById("app2"))
    .render(
        <div id={user.id}>
            <p>Полное имя: {user.getFullName()}</p>
            <p>Возраст: {user.age}</p>
            <p>Время генерации данных: {new Date().toLocaleTimeString()}</p>
        </div>
    );
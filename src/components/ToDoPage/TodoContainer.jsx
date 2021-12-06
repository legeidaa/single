import React from "react";
import Todo from "./Todo";
import {addToList, changeValue} from "../../redux/todo-reducer";
import {connect} from "react-redux";
import store from "../../redux/store";
import ListItem from "./ListItem";

class TodoContainer extends React.Component{
    onInputChange = (e) => {
        let inputValue = e.target.value
        this.props.changeValue(inputValue)
    }
    render() {
        return (
            <Todo
                inputValue={this.props.inputValue}
                changeValue={this.props.changeValue}
                addToList={this.props.addToList}
                onInputChange={this.onInputChange}
                listItems={this.props.listItems}
            />
        )
    }
}

//mapStateToProps преобразует стейт в пропсы
let mapStateToProps = (state) => {
    return {

        inputValue: state.toDoPage.inputValue,
        listItems: state.toDoPage.listItems,
    }
}

//mapDispatchToProps передаёт в компонент методы для обновления необходимого поля store
//вызываем из компонента метод, определенный в mapDispatchToProps, этот метод вызывает диспатч, который передает экшн в редьсер, который меняет стейт.
//Когда меняется стейт, перерисовывается компонент
let mapDispatchToProps = (dispatch) => {
    return {
        changeValue: (value) => {
            //диспатчим экшнкреэйторы
            dispatch(changeValue(value))
        },
        addToList: () => {
            dispatch(addToList())
        },
    }
}
store.subscribe(() => console.info(store.getState()))
//возвращает КонтейнерКомпонент, в пропсах которого переданы все свойства и методы, указанные в mapDispatchToProps и mapStateToProps
export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);

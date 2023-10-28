import ExpenseDate from "./ExpenseDate";



function ExpenseItems(props) {



    return (
        <>
            <div className="flex items-center bg-slate-600 w-4/5 m-auto mt-10 p-10 rounded-3xl">
                <div className="flex items-center">
                    <ExpenseDate date={props.date} />
                </div>
                <div className="flex items-center mx-5 text-white text-2xl">
                    {props.title}
                </div>
                <div className="flex p-5 ml-auto justify-between text-2xl font-bold bg-sky-900 rounded-2xl text-white border-2 border-white w-auto hover:bg-sky-700 cursor-pointer">
                    {props.amount}
                </div>
            </div>
        </>
    );

}

export default ExpenseItems;
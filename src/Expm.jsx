import { TextField, Autocomplete, IconButton } from '@mui/material'
import { React, useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
const arr = ['Expense', 'Savings', 'Investment'];


function Expm() {
    const [history, setHistory] = useState([]);
    const data = {
        id: 0,
        Amount: 0,
        Transaction: "",
        styles: ""
    };
    // const handleInput = (event) => {
    //     let newInput = { [event.target.name]: event.target.value }
    //     setData({ ...data, ...newInput });
    // }
    const handleSubmit = () => {
        data.Amount = document.getElementById('filled-password-input').value
        data.id = history.length
        data.Transaction = document.getElementById('combo-box-demo').value
        let x = {};
        if (data.Transaction == arr[0]) {
            x = { borderRight: '4px solid red' }
        } else if (data.Transaction == arr[1]) {
            x = { borderRight: '4px solid green' }
        } else {
            x = { borderRight: '4px solid orange' }
        }
        data.styles = x;
        addItem(data);
        console.log(history)
        document.getElementById('combo-box-demo').value = null;
        document.getElementById('filled-password-input').value = null;

    }
    const [Amount, setAmount] = useState([0, 0, 0]);
    const addItem = (element) => {
        // if (element.Transaction == arr[0]) setAmount(Amount[0] += element.Amount);
        // else if (element.Transaction == arr[1]) setAmount(Amount[1] += element.Amount);
        // else setAmount(Amount[2] += element.Amount);
        // setTransactionData(TransactionData.datasets.data(Amount.map((set => set))));
        setHistory([...history, element]);
        if (element.Transaction == arr[0]) {
            Amount[0] += parseInt(element.Amount)
            setAmount(Amount)
        }
        else if (element.Transaction == arr[1]) {
            Amount[1] += parseInt(element.Amount)
            setAmount(Amount);
        }
        else {
            Amount[2] += parseInt(element.Amount);
            setAmount(Amount);
        }
        console.log(Amount);
        amountMap = Amount.map((set) => set);
        setAmountMap(amountMap);
        TransactionData = {
            datasets: [{
                label: arr.map((arr) => arr),
                data: amountMap,
                backgroundColor: ["red", "green", "orange"]
            }]
        }
        setTransactionData(TransactionData)
    }
    const deleteItem = (itemTodelete) => {
        setHistory(prevHistory => prevHistory.filter(history => history.id !== itemTodelete.id));
        if (itemTodelete.Transaction === arr[0]) {
            Amount[0] -= itemTodelete.Amount;
            setAmount(Amount)
        }
        else if (itemTodelete.Transaction === arr[1]) {
            Amount[1] -= itemTodelete.Amount
            setAmount(Amount);
        }
        else {
            Amount[2] -= itemTodelete.Amount
            setAmount(Amount);
        }
        console.log(Amount);
        amountMap = Amount.map((set) => set);
        setAmountMap(amountMap);
        console.log(amountMap)
        TransactionData = {
            datasets: [{
                label: arr.map((arr) => arr),
                data: amountMap,
                backgroundColor: ["red", "green", "orange"]
            }]
        }
        setTransactionData(TransactionData)
    }
    let [amountMap, setAmountMap] = useState(Amount.map((set) => set));
    let [TransactionData, setTransactionData] = useState({
        datasets: [{
            label: arr.map((arr) => arr),
            data: amountMap,
            backgroundColor: ["red", "green", "orange"]
        }]
    })
    function Transactionchart() {

        return (
            <Pie data={TransactionData}></Pie>
        )
    }
    return (
        <div className=' bg-[#FFFBEB] w-full h-[100vh] font-mono'>
            <div className='flex flex-col mx-[25vw] max border-2 border-gray-500 shadow-2xl text-gray-800 bg-[#CCD6A6] h-full'>
                <p className='mx-auto mt-2 text-3xl font-bold '>Expense Tracker</p>
                <div className='flex flex-row'>
                    <div id='History' className='w-[25vw]  text-center mt-[2vh] '>
                        <p className='mx-auto mb-7 text-xl font-semibold'>History</p>
                        <div className='max-h-[25vh] overflow-y-auto overflow-x-hidden '>
                            {
                                history.map(history => (
                                    <div style={history.styles} className='w-[20vw] mt-2 h-[6vh] bg-white m-auto rounded-md drop-shadow-lg flex flex-row'>
                                        <IconButton aria-label="delete" className='float-left' >
                                            <DeleteIcon onClick={() => deleteItem(history)} />
                                        </IconButton>
                                        <p id={history.id} className='my-auto ml-2 text-xl'>{history.Transaction}</p>
                                        <p className='my-auto text-right lg:w-[10vw] mr-[1vw]'>${history.Amount}</p>
                                    </div>))
                            }
                        </div>

                    </div>
                    <div id='Expense' className='w-[25vw]  text-center mt-[2vh] '>
                        <p className='mx-auto mb-7 text-xl font-semibold'>Expenses</p>
                        <div>
                            <TextField
                                id="filled-password-input"
                                label="Amount"
                                name='Amount'
                                type="Number"
                                autoComplete="current-password"
                                variant="filled"
                                className=' w-[17vw] '
                            />
                            <Autocomplete

                                id="combo-box-demo"

                                options={arr}
                                className='mt-[2vh] m-auto'
                                sx={{ width: '17vw' }}
                                renderInput={(params) => <TextField {...params} variant="filled" label="Transaction type" name='Transaction' />}
                            />
                            <button className='mt-[3vh] w-[17vw] border-2 bg-blue-600 text-white h-[6vh] hover:bg-blue-900' onClick={handleSubmit}>Submit</button>
                        </div>
                    </div>

                </div>
                <div className='max-w-[25vw] text-center m-auto'>

                    <Transactionchart style={{ width: "300px" }} className=''></Transactionchart>
                </div>

            </div>
        </div>
    )

}


export default Expm;

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
import TriangleBar from './TriangleBar';
import { useLoaderData } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getStoredReadBook } from '../../utility/localstorage';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];



const data = [
    {
        name: 'Page A',
        uv: 4000,
    },
    {
        name: 'Page B',
        uv: 3000,
    },
    {
        name: 'Page C',
        uv: 2000,
    },
    {
        name: 'Page D',
        uv: 2780,
    },
];



const PagesToRead = () => {
    const books = useLoaderData();
    const [listBooks, setListBooks] = useState([]);

    useEffect(() => {
        const storedBookIds = getStoredReadBook();
        if (books?.length > 0) {
            const booksList = books.filter(book => storedBookIds.includes(book.id));
            setListBooks(booksList)
        }
    }, [books])
    console.log(listBooks)

    return (
        <div className='mt-9'>
            <BarChart
                width={1000}
                height={500}
                data={listBooks}
                margin={{
                    top: 20,
                    right: 30,
                    left: 40,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="bookName" />
                <YAxis dataKey='' />
                <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                    ))}
                </Bar>
            </BarChart>
        </div>
    );
};

export default PagesToRead;
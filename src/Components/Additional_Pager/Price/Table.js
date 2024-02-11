import React from "react";
import './Price.css';

const DataTable=({ data })=> {
    const separatorIndex = 4;
    return (
        <table>
            <thead>
            <tr>
                <th>Вид работ</th>
                <th>Цена</th>
                <th>Единицы измерения</th>
            </tr>
            </thead>
            <tbody>
            {data.slice(0, separatorIndex).map((row, index) => (
                <tr key={index}>
                    <td>{row[0]}</td>
                    <td>{row[1]}</td>
                    <td>{row[2]}</td>
                </tr>
            ))}
            </tbody>
            <tr>
                <td className={'exception'}colSpan="3">Дополнительные работы</td>
            </tr>
            <tbody>
            {data.slice(separatorIndex).map((row, index) => (
                <tr key={index}>
                    <td>{row[0]}</td>
                    <td>{row[1]}</td>
                    <td>{row[2]}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}
export default DataTable;
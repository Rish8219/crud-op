import React from 'react';

const StudentTable = () => {
    return (
        <div>
            <h1>Student Table </h1>
            <div className="container w-6/12">
                <table >
                    <thead>
                        <tr>
                            <th>Student ID</th>
                            <th>Student Name</th>
                            <th>Student Phone</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Rishabh</td>
                            <td>454545454</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default StudentTable;

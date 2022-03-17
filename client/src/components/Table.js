function Table(props) {

    const rows = props.advertisers.map((row) => {
        const domain = row[0];
        const count = row[1];
        return (
            <tr key={domain}>
                <td>{domain}</td>
                <td>{count}</td>
            </tr>
        )
    });

    return (
        <table className="table table-striped table-sm">
            <thead>
                <tr>
                    <th>Domain</th>
                    <th>Count</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    )
}

export default Table;
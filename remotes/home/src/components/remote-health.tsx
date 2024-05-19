import React from 'react';

interface ReactHealthProps {
    name: string;
    version: string;
    dependencies: any;
}

export const RemoteHealthComponent = ({ name, version, dependencies }: ReactHealthProps) => {
    const formatDependencies = () => {
        let collection = [];
        for (const [key, value] of Object.entries(dependencies)) {
            collection.push({key, value});
        }
        return collection;
    }
    return (
        <div className="card border-success m-2" style={{ display: 'flex' }}>
            <div className="card-body">
                <h5 className="card-title">App: {name}</h5>
                <h6 className="card-subtitle text-muted">Version: {version}</h6>
            </div>
            <ul className="list-group list-group-flush">
                { formatDependencies().map((item, i) => {
                    return (<li key={i} className="list-group-item">{item.key}: {item.value}</li>);
                })}
            </ul>
        </div>
    )
}

function TableColumn({data, isShow, isRed}:any){
    return (
        <div className={(isRed === true ? 'ZoneDrop' : 'ZoneDrop greenSide')}>
            <div className={(isRed === true ? 'headDrop' : 'headDrop greenHead')}>{(isRed === true ? 'RED DROP ZONE' : 'GREEN DROP ZONE')}</div>
            <div className="itemCol">
                {isShow && data && data.filter((e:any) => e.status === (isRed === true ? 1 : 2)).map((e:any) =>{
                    return (
                        <div key={e.Name + '-data'}>{'- ' + e.Name + ' : ' + e.value}</div>
                    )
                })}
            </div>
        </div>
    )
}
export default TableColumn;
import React from 'react'
import '../assets/css/bussiness_table.css'

const Table = () => {
    return (
        <div>
            <div className="row">
                <div className="col-6">
                    Negócios conquistados
                </div>
                <div className="col-6">
                    Filtros
                </div>

            </div>
            <div className="row">
                <div className="col-12">
                    <table>
                        <tr>
                            <th>Empresa</th>
                            <th>Categoria</th>
                            <th>Data de Criação</th>
                            <th>Oportunidade</th>

                        </tr>
                        <tr>
                            <td>Testes</td>
                            <td>Testes</td>
                            <td>04/12/2020</td>
                            <td>Testes</td>
                        </tr>
                    </table>
                </div>
            </div>

        </div>

    )
}

export default Table

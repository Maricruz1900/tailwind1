import React from 'react';
import resultadospdf from '../img/pdf.png';
import document from '../img/google-docs.png';
import pdf from '../img/pdf.png';
import usosAguaImg from '../img/empresa.png';
import waterMineralImg from '../img/water.png';

// Define el array de artículos aquí
const articles = [
  { title: 'Resultados 23 de junio', token: '39.00 NOBL', size: '705 kb', author: 'Yo', sales: '55%', img: resultadospdf },
  { title: 'Que pasó con el agua de la planta 3', token: '43.26 NOBL', size: '208 mb', author: 'Yo', sales: '18%', img: document },
  { title: 'Cantidad microplásticos', token: '20.30 NOBL', size: '197 kb', author: 'Usuario 1', sales: '8%', img: pdf },
  { title: 'Usos del agua', token: '18.75 NOBL', size: '80 kb', author: 'Equipo VARUNA', sales: '3%', img: usosAguaImg },
  { title: 'Empresa Water Mineral', token: '25.86 NOBL', size: '178 gb', author: 'Yo', sales: '3%', img: waterMineralImg },
];


const ArticlesTable = () => {
  return (
    <div className="bg-white rounded shadow p-4 mb-6">
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="py-2 text-center">Archivo</th>
            <th className="py-2 text-center">Título</th>
            <th className="py-2 text-center">Token</th>
            <th className="py-2 text-center">Tamaño</th>
            <th className="py-2 text-center">Autor</th>
            <th className="py-2 text-center">Sales</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((article, index) => (
            <tr key={index}>
              <td className="py-2"><img src={article.img} alt={article.title} className="h-16 w-16 object-cover" /></td>
              <td className="py-2 text-center">{article.title}</td>
              <td className="py-2 text-center">{article.token}</td>
              <td className="py-2 text-center">{article.size}</td>
              <td className="py-2 text-center">{article.author}</td>
              <td className="py-2 text-center">{article.sales}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ArticlesTable;

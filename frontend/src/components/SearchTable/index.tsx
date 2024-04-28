import { Table } from "react-bootstrap";
import SearchItem from "../SearchItem";
import { useState } from "react";
import Pagination from "./../Pagination/index";
import { IBula } from "./../../interfaces/IBula";
import { useSearchParams } from "react-router-dom";
import "./styles.scss";

interface ISearchTableProps {
  allSearchItems: IBula[];
}

export default function SearchTable({ allSearchItems }: ISearchTableProps) {
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchFilters = {
    name: searchParams.get("name")?.toUpperCase() ?? "",
    company: searchParams.get("company")?.toUpperCase() ?? "",
    startDate: searchParams.get("startDate") ?? "",
    endDate: searchParams.get("endDate") ?? "",
  };

  const filteredSearchItems = allSearchItems.filter((searchItem) => {
    if (!searchItem.name.includes(searchFilters.name)) {
      return false;
    }
    if (!searchItem.company.includes(searchFilters.company)) {
      return false;
    }

    const publishDate = Date.parse(searchItem.published_at);
    const startDate = Date.parse(searchFilters.startDate);
    const endDate = Date.parse(searchFilters.endDate);

    console.log();

    if (publishDate < startDate || publishDate > endDate) {
      return false;
    }

    return true;
  });

  const totalPages = Math.ceil(filteredSearchItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredSearchItems.slice(startIndex, endIndex);

  return (
    <div className="p-3 w-100">
      <h1 className="text-center">Search Table</h1>
      <Table responsive className="mx-auto">
        <thead>
          <tr>
            <th className="medicine text-center">Medicamento</th>
            <th className="company text-center">Empresa</th>
            <th className="published-at text-center">Publicação</th>
            <th className="leaflets text-center" colSpan={2}>
              Bulas
            </th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((searchItem) => (
            <SearchItem key={searchItem.id} item={searchItem} />
          ))}
        </tbody>
      </Table>

      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </div>
  );
}

import React from "react";

const ClaimsTable = React.memo(function ClaimsTable({
  claims,
  total,
  page,
  limit,
  onPageChange,
  onSort,
  sortBy,
  sortOrder
}: any) {
  const totalPages = Math.ceil(total / limit);

  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            <th onClick={() => onSort("date")}>
              Date {sortBy === "date" ? sortOrder : ""}
            </th>
            <th>Claim ID</th>
            <th onClick={() => onSort("amount")}>
              Amount {sortBy === "amount" ? sortOrder : ""}
            </th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {claims.map(claim => (
            <tr key={claim.id}>
              <td>{claim.date}</td>
              <td>{claim.id}</td>
              <td>{claim.amount}</td>
              <td>{claim.status}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        <button
          disabled={page === 1}
          onClick={() => onPageChange(page - 1)}
        >
          Prev
        </button>

        <span> Page {page} of {totalPages} </span>

        <button
          disabled={page === totalPages}
          onClick={() => onPageChange(page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
});

export default ClaimsTable;
import React, { useEffect, useState } from "react";
import SearchBox from "../SearchBox";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import "./MaterialUITable.css";
const initialState = {
  userNames: [],
  newTargetState: "",
  filterUsernames: [],
};
export default function MaterialTable() {
  const [state, setState] = useState(initialState);
  console.log("state", state);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setState((prevState) => {
          return { ...prevState, userNames: data };
        });
      });
  }, []);
  useEffect(() => {
    const filterUsernames = state.userNames.filter((userFilter) => {
      return userFilter.name.toLowerCase().includes(state.newTargetState);
    });
    setState((prevState) => {
      return {
        ...prevState,
        filterUsernames,
      };
    });
  }, [state.userNames, state.newTargetState]);

  const searchChange = (event) => {
    const newTargetState = event.target.value.toLowerCase();
    setState((prevState) => {
      return {
        ...prevState,
        newTargetState,
      };
    });
  };
  return (
    <>
      <SearchBox
        placeholder="Search UserNames"
        className="users-search-box"
        onChangeHandler={searchChange}
      />

      <TableContainer className="table-container">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">email</TableCell>
              <TableCell align="right">phone</TableCell>
              <TableCell align="right">website</TableCell>
              <TableCell align="right">company</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {state.filterUsernames.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">{row.phone}</TableCell>
                <TableCell align="right">{row.website}</TableCell>
                <TableCell align="right">{row.company.name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

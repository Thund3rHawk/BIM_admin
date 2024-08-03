import React, { useMemo, useState } from "react";
import { IoMdArrowBack } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import { SearchIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaPlus } from "react-icons/fa6";

const admin = [
  {
    id: "001",
    full_name: "John Doe",
    permission: "Edit user,  Export user...",
    date_of_creation: "2024-07-25",
    status: "active",
  },
  {
    id: "002",
    full_name: "John Doe",
    permission: "Edit user,  Export user...",
    date_of_creation: "2024-07-25",
    status: "active",
  },
  {
    id: "003",
    full_name: "John Doe",
    permission: "Edit user,  Export user...",
    date_of_creation: "2024-07-25",
    status: "active",
  },
  {
    id: "004",
    full_name: "John Doe",
    permission: "Edit user,  Export user...",
    date_of_creation: "2024-07-25",
    status: "active",
  },
];

function AdminList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortConfig, setSortConfig] = useState(null);
  //   const navigate = useNavigate();
  const filteredAdmins = useMemo(() => {
    return admin.filter(
      (admin) =>
        admin.full_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        admin.id.includes(searchQuery)
    );
  }, [searchQuery, admin]);

  const sortedAdmins = useMemo(() => {
    if (sortConfig !== null) {
      return [...filteredAdmins].sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return filteredAdmins;
  }, [filteredAdmins, sortConfig]);

  const requestSort = (key) => {
    let direction = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };
  return (
    <div className="flex-1 h-screen mx-[32px] mt-[32px]">
      <div className="flex justify-between items-center">
        <Link to="/settings">
          <div className="w-[92px] h-[40px] flex justify-center items-center bg-[#fff] my-3 gap-2 rounded-[8px]">
            <IoMdArrowBack />
            <p>Back</p>
          </div>
        </Link>
        <Link to="createAdmin">
          <button className=" flex gap-3 items-center justify-center text-[#fff] text-[16px] font-[600] bg-pink px-[10px] py-[8px] rounded-[4px]">
            <span>
              <FaPlus size={12} />
            </span>
            Create a new admin
          </button>
        </Link>
      </div>
      <div className=" mb-[24px] ">
        <h1 className="text-[24px] font-[700]">Admin List</h1>
        <p className="text-[14px] font-[400] text-[#72849A]">
          Yano's admin user list
        </p>
      </div>
      <div className="bg-[#fff] rounded-[8px] ">
        <form className="p-[16px]">
          <div className="flex items-center border rounded-[8px] md:w-2/3 lg:w-1/3 bg-[#EEEEEE] h-[40px] px-2 ">
            <SearchIcon className="  h-4 w-4 text-gray-500" />
            <input
              className="w-full bg-transparent shadow-none border-none outline-none pl-2 "
              placeholder="Search..."
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </form>

        <Table className="">
          <TableHeader>
            <TableRow>
              <TableHead
                className="cursor-pointer text-center"
                onClick={() => requestSort("id")}
              >
                User ID
              </TableHead>
              <TableHead
                onClick={() => requestSort("full_name")}
                className="cursor-pointer text-center"
              >
                Full Name
              </TableHead>
              <TableHead
                onClick={() => requestSort("permission")}
                className="cursor-pointer text-center"
              >
                Permissions
              </TableHead>
              <TableHead
                onClick={() => requestSort("date_of_creation")}
                className="cursor-pointer text-center"
              >
                Date of creation
              </TableHead>
              <TableHead
                onClick={() => requestSort("status")}
                className="cursor-pointer text-center"
              >
                Status
              </TableHead>
              <TableHead className="cursor-pointer text-center">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedAdmins?.map((admin) => (
              <TableRow key={admin?.id}>
                <TableCell className=" text-center">{admin?.id}</TableCell>
                <TableCell className="cursor-pointer text-center">
                  {admin?.full_name}
                </TableCell>
                <TableCell className="cursor-pointer text-center">
                  {admin?.permission}
                </TableCell>
                <TableCell className="cursor-pointer text-center">
                  {admin?.date_of_creation}
                </TableCell>
                <TableCell className="cursor-pointer text-center">
                  {admin?.status}
                </TableCell>
                <TableCell className="cursor-pointer text-center">
                  ...
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default AdminList;

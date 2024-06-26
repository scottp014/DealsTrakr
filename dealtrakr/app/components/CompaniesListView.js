import { useDispatch, useSelector } from "react-redux";
import companies from "../store/slices/companies";
import { fetchCompanies } from "../store/slices/companies";
import { useEffect, React } from "react";
import { useState } from "react";
import { companiesAPI } from "../data/companiesAPI";
import Link from "next/link";
import CompanySearch from "./CompanySearch";
import AddCompanyForm from "../companies/new/page";
import axios from "axios";
//searchbar
// table
//pagination component

const CompaniesListView = () => {
  // const [allCompanies, _] = useState(companiesAPI.getAll());
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCompanies());
  }, [dispatch]);

  const allCompanies = useSelector((state) => state.companies.companiesToShow);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const renderCompanies = allCompanies.map((company) => {
    return (
      <tr scope="row">
        <td scope="col">
          <div>
            <img src={company.imageURL} placeholder={company.name} />
            <span>
              <Link href={`/companies/${company._id}`}>{company.name}</Link>
            </span>
          </div>
        </td>
        <td scope="col">
          <span>{company.companyOwner}</span>
        </td>
        <td scope="col">
          <span>{formatDate(company.dateCreated)}</span>
        </td>
        <td scope="col">
          <span>{company.phoneNumber}</span>
        </td>
        <td scope="col">
          <span>{company.city}</span>
        </td>
        <td>{company.state}</td>
      </tr>
    );
  });

  return (
    <div className="container companiesForm">
      <div className="formActions">
        <CompanySearch />
        <AddCompanyForm />
        {/* <Link href="/companies/new">
          <button className="addCompanyBtn">Add New Company</button>
        </Link> */}
      </div>
      <table className="table table-light table-striped">
        <thead>
          <tr>
            <th>Company Name</th>
            <th>Company Owner</th>
            <th>Create Date</th>
            <th>Phone Number</th>
            <th>City</th>
            <th>State</th>
          </tr>
        </thead>
        <tbody>{renderCompanies}</tbody>
      </table>
    </div>
  );
};

export default CompaniesListView;

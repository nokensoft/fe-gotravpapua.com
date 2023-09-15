"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Pagination from "../pagination";

export default function SearchAdventures({ data }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResults] = useState(data);
  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageData = searchResult.slice(startIndex, endIndex);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setSearchQuery(inputValue);
    const search = data.filter((item) =>
      JSON.stringify(item.title)
        .toLowerCase()
        .includes(inputValue.toLowerCase())
    );
    setSearchResults(search);

    if (searchQuery === "") {
      setSearchResults(search);
    }
  };

  const DataNotFound = () => {
    if (searchResult.length <= 0) {
      return (
        <>
          <p className="bg-stone-400 text-xl p-2">Data Not Found !</p>
        </>
      );
    }
    return (
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(data.length / itemsPerPage)}
        onPageChange={handlePageChange}
      />
    );
  };

  return (
    <>
      <div className="bg-success d-flex justify-content-center py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-10">
              <input
                placeholder="Search"
                type="text"
                name="search"
                value={searchQuery}
                onChange={handleInputChange}
                className="form-control form-control-lg rounded-0 p-3 px-5 text-secondary"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="rs-gallery pt-100 pb-100 md-pt-70 md-pb-70">
        <div className="container">
          <div className="row">
            {currentPageData.map((item, index) => {
              if (item.status === "Publish") {
                return (
                  <div className="col-lg-4 mb-30 col-md-6" key={index}>
                    <div className="gallery-item">
                      <div className="gallery-Image">
                        <Link
                          className="image-popup"
                          href={`tour-adventures/${item.slug}`}
                        >
                          <Image
                            className="h-72"
                            src={
                              process.env.NEXT_PUBLIC_HOSTNAME + item.picture
                            }
                            alt=""
                            height={1000}
                            width={1000}
                            loading="lazy"
                          />
                        </Link>
                      </div>
                      <div className="title fs-2 fw-bold text-success">
                        Motorcycle Tours
                      </div>
                    </div>
                  </div>
                );
              }
            })}
            <DataNotFound />
          </div>
        </div>
      </div>
    </>
  );
}

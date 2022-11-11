import React, { useState, useEffect } from "react";
import axios from "axios";
import { Select } from "antd";
import { Cascader } from "antd";
import Link from "next/link";
import { DesktopOutlined , GlobalOutlined } from '@ant-design/icons';


import { Col, Divider, Row, Card } from "antd";
const { Meta } = Card;
export default function Home() {
  const [result, setResult] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
      headers: {
        "X-RapidAPI-Key": "12b146e3c2msh9a9a36435111e78p14aac1jsn9458bad564c8",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setResult(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  const handleChange_platform = async (value) => {
    const options = {
      method: "GET",
      url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
      params: { platform: value },
      headers: {
        "X-RapidAPI-Key": "12b146e3c2msh9a9a36435111e78p14aac1jsn9458bad564c8",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setResult(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const handleChange_category = async (value) => {
    const options = {
      method: "GET",
      url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
      params: { category: value },
      headers: {
        "X-RapidAPI-Key": "12b146e3c2msh9a9a36435111e78p14aac1jsn9458bad564c8",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setResult(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const handleChange_sort = async (value) => {
    const options = {
      method: "GET",
      url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
      params: { "sort-by": value },
      headers: {
        "X-RapidAPI-Key": "12b146e3c2msh9a9a36435111e78p14aac1jsn9458bad564c8",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    axios
      .request(options)
      .then(function (response) {
        setResult(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const advanceFilter = [
    {
      value: "platform",
      label: "Platform",
      children: [
        {
          value: "all",
          label: "All",
        },
        {
          value: "pc",
          label: "PC",
        },
        {
          value: "browser",
          label: "Browser",
        },
      ],
    },
    {
      value: "category",
      label: "Category",
      children: [
        {
          value: "action",
          label: "action",
        },
        {
          value: "sports",
          label: "sports",
        },
        {
          value: "open-world",
          label: "open-world",
        },
        {
          value: "survival",
          label: "survival",
        },
        {
          value: "zombie",
          label: "zombie",
        },
        {
          value: "third-Person",
          label: "third-Person",
        },
        {
          value: "fantasy",
          label: "fantasy",
        },
        {
          value: "horror",
          label: "horror",
        },
        {
          value: "sci-fi",
          label: "sci-fi",
        },
        {
          value: "shooter",
          label: "shooter",
        },
        {
          value: "fighting",
          label: "fighting",
        },
        {
          value: "first-person",
          label: "first-person",
        },
      ],
    },
    {
      value: "sort-by",
      label: "Sort-By",
      children: [
        {
          value: "release-date",
          label: "Release-date",
        },
        {
          value: "popularity",
          label: "Popularity",
        },
        {
          value: "alphabetical ",
          label: "Alphabetical ",
        },
        {
          value: "relevance",
          label: "Relevance",
        },
      ],
    },
  ];

  const onChangeAD = (value) => {
    console.log(value);
  };

  const ADvanceFilter = async (value) => {
    const options = {
      method: "GET",
      url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
      params: { platform: value, category: value, "sort-by": value },
      headers: {
        "X-RapidAPI-Key": "12b146e3c2msh9a9a36435111e78p14aac1jsn9458bad564c8",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <div className=" bg-slate-800">
      <div className=" w-[60%] mx-auto pt-10 flex justify-around items-center ">
        <div className=" ">
          <h1 className=" text-gray-200">Platform</h1>
          <Select
            defaultValue="All"
            style={{
              width: 120,
            }}
            onChange={handleChange_platform}
            options={[
              {
                value: "all",
                label: "All",
              },
              {
                value: "pc",
                label: "PC",
              },
              {
                value: "browser",
                label: "Browser",
              },
            ]}
          />
        </div>

        <div>
          <h1  className=" text-gray-200">Category</h1>
          <Select
            defaultValue="All"
            style={{
              width: 120,
            }}
            onChange={handleChange_category}
            options={[
              {
                value: "action",
                label: "action",
              },
              {
                value: "sports",
                label: "sports",
              },
              {
                value: "open-world",
                label: "open-world",
              },
              {
                value: "survival",
                label: "survival",
              },
              {
                value: "zombie",
                label: "zombie",
              },
              {
                value: "third-Person",
                label: "third-Person",
              },
              {
                value: "fantasy",
                label: "fantasy",
              },
              {
                value: "horror",
                label: "horror",
              },
              {
                value: "sci-fi",
                label: "sci-fi",
              },
              {
                value: "shooter",
                label: "shooter",
              },
              {
                value: "fighting",
                label: "fighting",
              },
              {
                value: "first-person",
                label: "first-person",
              },
            ]}
          />
        </div>

        <div>
          <h1  className=" text-gray-200">SORT</h1>
          <Select
            defaultValue="All"
            style={{
              width: 120,
            }}
            onChange={handleChange_sort}
            options={[
              {
                value: "release-date",
                label: "Release-date",
              },
              {
                value: "popularity",
                label: "Popularity",
              },
              {
                value: "alphabetical ",
                label: "Alphabetical ",
              },
              {
                value: "relevance",
                label: "Relevance",
              },
            ]}
          />
        </div>

        {/* <div>
       <h1>Filter</h1>
       <Cascader options={advanceFilter} onChange={onChangeAD} placeholder="Select" />
       </div> */}
      </div>
      <div className="home_main w-[90%] mx-auto my-10 ">
        <div className="grid grid-cols-4 gap-4 sm:grid-cols-1 md:grid-cols-3 ">
          {result.map((items) => (
            <>
            <Link href={`/home/${items.id}`}>
              <div className="game_div bg-gray-200 rounded-xl ">
                <div className="img">
                  <img
                    className="gameImg rounded-xl "
                    src={items.thumbnail}
                    alt="img-error"
                  />
                </div>
                <div className="details mt-3 ml-2  flex justify-around items-center ">
                  <h1 className=" pb-2 ">{items.title}</h1>
                
                 {/* {
                    items.platform === "PC (Windows)" ? <DesktopOutlined className=" text-lg text-gray-500 " /> : <GlobalOutlined className=" text-lg text-gray-500 " />
                  } */}
          
                </div>
              </div>
              </Link>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

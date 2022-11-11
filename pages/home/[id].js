import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import moment from "moment";
import { Image } from "antd";
import { ArrowRightOutlined  } from '@ant-design/icons';
import Link from "next/link";

export default function Details() {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  const router = useRouter();
  const { id } = router.query;
  const [result, setResult] = useState([]);
  const [systemReq, setsysReq] = useState([]);
  const [sshort, setSchreenshort] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://free-to-play-games-database.p.rapidapi.com/api/game",
      params: { id },
      headers: {
        "X-RapidAPI-Key": "12b146e3c2msh9a9a36435111e78p14aac1jsn9458bad564c8",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setResult(response.data);
        setsysReq(response.data.minimum_system_requirements);
        setSchreenshort(response.data.screenshots);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <>
      <div class="  bg-slate-900 w-full h-full ">
        <div className=" pb-5 w-[70%] mx-auto pt-10 flex sm:w-[95vw] sm:pt-2  sm:flex-col ">
          <div className=" flex flex-col ">
            <div>
              <img
                src={result.thumbnail}
                className="gameImg w-[500px] h-[350px] bg-cover "
                alt="img-error"
              />
            </div>
            <div>
              <a href={result.game_url} target="_blank">
                <p className="game_url  bg-blue-400 hover:bg-blue-500 py-2 px-6 text-white text-center ">
                  Game Link
                </p>
              </a>
            </div>

            <div className=" mt-5">
                <p className=" text-gray-300" >Screenshorts</p>
              {!sshort
                ? "No screenshots available"
                : sshort.map((sc) => (
                    <>
                      <img className=" w-[400px] mb-6 " src={sc.image} alt="" />
                    </>
                  ))}
            </div>
          </div>
          <div className=" ml-10 text-gray-300 sm:ml-0   sm:text-center ">
           <div className=" flex justify-between items-center  ">
           <div>
           Title
            <h1 className=" font-semibold text-4xl text-white ">
              {result.title}
            </h1>
            </div>
           <Link href='/' > <ArrowRightOutlined className=" text-2xl " /></Link>
           
          
           </div>
            <div className=" mt-10 flex justify-between items-center ">
              <div>
                <p>Genre</p>
                <p>{result.genre}</p>
              </div>

              <div>
                <p>Platform</p>
                <p>{result.platform}</p>
              </div>

              <div>
                <p>Publisher</p>
                <p>{result.publisher}</p>
              </div>

              <div>
                <p>Platform</p>
                <p>{result.platform}</p>
              </div>
            </div>
            {!systemReq ? (
              ""
            ) : (
              <div className=" mt-7">
                <h1 className=" text-gray-300">
                  Minimum System Requirements:{" "}
                </h1>

                <div className=" mt-4 ">
                  <div className="  mt-1 ">
                    <p>OS.</p>
                    <p>{systemReq.os}</p>
                  </div>

                  <div className="  mt-4 ">
                    <p>Processor.</p>
                    <p>{systemReq.processor}</p>
                  </div>

                  <div className="  mt-4 ">
                    <p>Memory.</p>
                    <p>{systemReq.memory}</p>
                  </div>

                  <div className="  mt-4 ">
                    <p>Graphics.</p>
                    <p>{systemReq.graphics}</p>
                  </div>

                  <div className="  mt-4 ">
                    <p>storage.</p>
                    <p>{systemReq.storage}</p>
                  </div>
                </div>

                <div className=" mt-6">
                  <p>Description.</p>
                  <p className=" text-gray-300">{result.short_description}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

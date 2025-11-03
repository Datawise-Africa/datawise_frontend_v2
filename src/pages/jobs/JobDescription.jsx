// src/pages/JobDescription.jsx
import React, { useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { PositionContext } from "@/context/PositionContext";
import { slugify } from "@/utils/slugify";

import { available_positions } from "@/constants";
import list_circle_icon from "/assets/list-circle.svg"; // <-- fix path

const JobDescription = () => {
  const { slug } = useParams(); // e.g., "research-analyst-intern"
  const navigate = useNavigate();
  const { state, dispatch } = useContext(PositionContext);

  // Load job from slug on mount
  useEffect(() => {
    if (!slug) {
      navigate("/jobs", { replace: true });
      return;
    }

    const job = available_positions.find(
      (pos) => slugify(pos.title) === slug
    );

    if (job) {
      dispatch({ type: "SET_POSITION", payload: job });
    } else {
      navigate("/jobs", { replace: true });
    }
  }, [slug, dispatch, navigate]);

  const pos = state.selectedPosition;

  if (!pos) {
    return (
      <div className="container mx-auto py-20 text-center">
        <p>Loading job details...</p>
      </div>
    );
  }

  const applyUrl = "https://airtable.com/appQCD9An8BnqG6J6/pagUSgqnzVrNeORKY/form";

  return (
    <div className="container mx-auto pt-20 px-5 lg:px-16 xl:px-20">
      <section className="max-w-4xl mx-auto">
        <h1 className="lora-font font-bold text-[40px] leading-[110%] tracking-[-0.02em] text-center mb-8">
          {pos.title}
        </h1>

        {/* About the role */}
        <div className="mb-12">
          <h2 className="lora-font font-semibold text-[28px] text-[#26A37E] mb-4">About the role</h2>
          <p className="sora-font text-[#0F2542] leading-relaxed">{pos.overview}</p>
        </div>

        {/* Responsibilities */}
        <div className="mb-12">
          <h2 className="lora-font font-semibold text-[28px] text-[#26A37E] mb-4">Responsibilities</h2>
          <ul className="space-y-3">
            {pos.responsibilities.map((r, i) => (
              <li key={i} className="flex gap-3">
                <img src={list_circle_icon} alt="" className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="sora-font text-[#0F2542]">{r}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Qualifications */}
        <div className="mb-12">
          <h2 className="lora-font font-semibold text-[28px] text-[#26A37E] mb-4">Qualifications</h2>
          <ul className="space-y-3">
            {pos.qualifications.map((q, i) => (
              <li key={i} className="flex gap-3">
                <img src={list_circle_icon} alt="" className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="sora-font text-[#0F2542]">{q}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Bonus Qualifications */}
        {pos.bonus_qualifications?.length > 0 && (
          <div className="mb-12">
            <h2 className="lora-font font-semibold text-[28px] text-[#26A37E] mb-4">
              Bonus Qualifications
            </h2>
            <ul className="space-y-3">
              {pos.bonus_qualifications.map((b, i) => (
                <li key={i} className="flex gap-3">
                  <img src={list_circle_icon} alt="" className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span className="sora-font text-[#0F2542]">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* What we offer */}
        <div className="mb-12">
          <h2 className="lora-font font-semibold text-[28px] text-[#26A37E] mb-4">What we offer</h2>
          <ul className="space-y-3">
            {pos.what_we_offer.map((w, i) => (
              <li key={i} className="flex gap-3">
                <img src={list_circle_icon} alt="" className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="sora-font text-[#0F2542]">{w}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Apply Button */}
        <div className="flex justify-center">
          <button
            onClick={() => window.open(applyUrl, "_blank", "noopener,noreferrer")}
            className="bg-[#26A37E] text-white font-medium py-6 px-20 rounded-md hover:bg-[#1e8c68] transition flex items-center gap-2 mb-5"
          >
            Apply Now
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </button>
        </div>
      </section>
    </div>
  );
};

export default JobDescription;
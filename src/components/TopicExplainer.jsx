import React from "react";
import {ExplainerAllArticles, ExplainerCoding } from "../explainers";

const TopicExplainer = (topic) => {
if (topic === "coding") {
return (
<ExplainerCoding />
);
} else {
return (
<ExplainerAllArticles />
);
}
};

export default TopicExplainer;

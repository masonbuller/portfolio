import React from "react";
import moffat_bay from '../assets/images/moffat_bay.png';
import nfs_navigator from '../assets/images/nfs_navigator.png';
import minecraft_randomizer from '../assets/images/minecraft_randomizer.png';
import crime_analysis from '../assets/images/crime_analysis.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/masonbuller/MoffatBaySite" target="_blank" rel="noreferrer"><img src={moffat_bay} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/masonbuller/MoffatBaySite" target="_blank" rel="noreferrer"><h2>Moffat Bay Lodging</h2></a>
                <p>Led the creation of a full-stack, responsive web application using Java, JSP, MySQL, and Bootstrap to manage lodging reservations, incorporating agile practices, CI with GitHub, and backend handling with servlets.</p>
            </div>
            <div className="project">
                <a href="https://github.com/masonbuller/CrimeRateDataAnalysis" target="_blank" rel="noreferrer"><img src={crime_analysis} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/masonbuller/CrimeRateDataAnalysis" target="_blank" rel="noreferrer"><h2>Crime Rate Analysis</h2></a>
                <p>A Python-based data analysis project that processes and analyzes crime rate data using filtering, visualization, and predictive techniques. Leveraged Pandas to import and clean a CSV dataset containing crime statistics by year, location, population, and offense type.</p>
            </div>
            <div className="project">
                <a href="https://github.com/masonbuller/NFSGameNavigator" target="_blank" rel="noreferrer"><img src={nfs_navigator} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/masonbuller/NFSGameNavigator" target="_blank" rel="noreferrer"><h2>Need for Speed Navigator</h2></a>
                <p>A C# and XML desktop application in Visual Studio that features an interactive, menu-driven interface for selecting and launching games from a connected USB drive. Designed as a creative side project, it incorporates dropdown menus, slideshows, and direct file system access to explore UI design and user interaction concepts.</p>
            </div>
            <div className="project">
                <a href="https://github.com/masonbuller/MinecraftRandomItem" target="_blank" rel="noreferrer"><img src={minecraft_randomizer} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/masonbuller/MinecraftRandomItem" target="_blank" rel="noreferrer"><h2>Minecraft Item Randomizer</h2></a>
                <p>A Java-based Minecraft plugin that periodically generates and delivers random items to players, dynamically handling inventory limits and world placement. Implemented command-driven execution logic, timed item generation, and randomized material selection using structured arrays and scheduled tasks.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;
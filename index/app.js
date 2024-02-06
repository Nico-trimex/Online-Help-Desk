// script.js

document.addEventListener("DOMContentLoaded", function () {
    // Mock JSON data
    var barangayData = {
        // ... (paste your mock JSON data here)
    };

    // Populate header
    document.getElementById("barangayName").innerText = barangayData.barangay.name;
    document.getElementById("barangayLocation").innerText = barangayData.barangay.location;

    // Populate information about Barangay Tagapo
    var barangayInfoSection = document.getElementById("barangayInfo");

    // Population
    var populationParagraph = document.createElement("p");
    populationParagraph.innerText = "Population: " + barangayData.barangay.population;
    barangayInfoSection.appendChild(populationParagraph);

    // Officials
    var officialsHeading = document.createElement("h3");
    officialsHeading.innerText = "Barangay Officials";
    barangayInfoSection.appendChild(officialsHeading);

    var barangayCaptainParagraph = document.createElement("p");
    barangayCaptainParagraph.innerText = "Barangay Captain: " + barangayData.barangay.officials.barangayCaptain;
    barangayInfoSection.appendChild(barangayCaptainParagraph);

    var kagawadsList = document.createElement("ul");
    barangayData.barangay.officials.kagawads.forEach(function (kagawad) {
        var listItem = document.createElement("li");
        listItem.innerText = kagawad;
        kagawadsList.appendChild(listItem);
    });
    barangayInfoSection.appendChild(kagawadsList);

    // Services
    var servicesHeading = document.createElement("h3");
    servicesHeading.innerText = "Services";
    barangayInfoSection.appendChild(servicesHeading);

    var servicesList = document.createElement("ul");
    barangayData.barangay.services.forEach(function (service) {
        var listItem = document.createElement("li");
        listItem.innerHTML = `<strong>${service.name}:</strong> ${service.description}`;
        servicesList.appendChild(listItem);
    });
    barangayInfoSection.appendChild(servicesList);

    // Contact Information
    var contactHeading = document.createElement("h3");
    contactHeading.innerText = "Contact Information";
    barangayInfoSection.appendChild(contactHeading);

    var contactInfoParagraphs = [
        "Address: " + barangayData.barangay.contactInformation.barangayHallAddress,
        "Contact Number: " + barangayData.barangay.contactInformation.contactNumber,
        "Email: " + barangayData.barangay.contactInformation.email
    ];

    contactInfoParagraphs.forEach(function (info) {
        var contactInfoParagraph = document.createElement("p");
        contactInfoParagraph.innerHTML = info;
        barangayInfoSection.appendChild(contactInfoParagraph);
    });
});

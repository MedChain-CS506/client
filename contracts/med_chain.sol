pragma solidity ^0.4.4;

contract med_chain {
    
    address private oracle;

    function constructor() public {
        oracle = msg.sender;
    }

    struct admin {
        uint id;
        address admin_address;
    }

    struct paitent {
        uint aadhaar;
        uint age;
        bytes32 name;
        bytes32 dob;
        uint weight;
        bytes32[] allergies;
        bytes32 special;
        uint[] prescription_ids;
        uint[] doctor_ids;
        address paitent_address;
    }

    struct doctor {
        uint id;
        uint license_no;
        bytes32 name;
        bytes32 specialisation; 
        address doctor_address;
    }

    struct pharmacy {
        uint id;
        uint license_no;
        address phar_addr;
    }

    struct prescription {
        uint doctor_id;
        uint paitent_id;
        bytes32 disease;
        bytes32[] symptoms;
        bytes32[] medicine;
        uint[] medicine_quantity;
        bytes32 timestamp_prescribed;
        uint pharmacy_id;
        bytes32 timestamp_marked;
        bool marked;
    }

    mapping (uint => paitent) paitent_aadhaar_mapping;
    mapping (uint => doctor) doctor_id_mapping;
    mapping (uint => pharmacy) pharmacy_id_mapping; 
    mapping (uint => prescription) paitent_prescription_mapping;    

    modifier only_doctor(uint d_id) {
        if(doctor_id_mapping[d_id].doctor_address == msg.sender){
            _;
        }
        else {
            throw;
        }
    }

    modifier only_pharmacy(uint f_id) {
        if(pharmacy_id_mapping[f_id].phar_addr == msg.sender){
            _;
        }
        else {
            throw;
        }
    }

    function add_paitent(uint aadhaar, uint age, bytes32 name, bytes32 dob, uint weight, bytes32 allergies, bytes32 special) {
        paitent_aadhaar_mapping[aadhaar].aadhaar = aadhaar;
        paitent_aadhaar_mapping[aadhaar].age = age;
        paitent_aadhaar_mapping[aadhaar].name = name;
        paitent_aadhaar_mapping[aadhaar].dob = dob;
        paitent_aadhaar_mapping[aadhaar].weight = weight;
        paitent_aadhaar_mapping[aadhaar].allergies.push(allergies);
        
        for(uint i = 0; i < allergies.length; i++) {
            paitent_aadhaar_mapping[aadhaar].allergies.push(allergies[i]);
        }
        
        paitent_aadhaar_mapping[aadhaar].paitent_address = msg.sender;
    }

    function add_doctor(uint id, uint license_no, bytes32 name, bytes32 specialisation, address d_addr) {
        doctor_id_mapping[id].id = id;
        doctor_id_mapping[id].license_no = license_no;
        doctor_id_mapping[id].name = name;
        doctor_id_mapping[id].specialisation = specialisation
        doctor_id_mapping[id].doctor_address = d_addr;
    }

    function add_pharmacy(uint id, uint license_no, address p_addr){
        pharmacy_id_mapping[id].id = id;
        pharmacy_id_mapping[id].license_no = license_no;
        pharmacy_id_mapping[id].phar_addr = p_addr;
    }

}
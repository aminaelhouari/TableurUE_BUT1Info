
const matieresData = [
    
    {
        id: "R1.01", nom: "Initiation au développement", type: "res",
        evals: [
            { nom: "DST période A", coef: 1, note: null },
            { nom: "DST période B", coef: 1, note: null } 
        ]
    },
    {
        id: "R1.02", nom: "Dév. d'interfaces web", type: "res",
        evals: [
            { nom: "DST - periode A", coef: 3, note: null },
            { nom: "Projet Web 1", coef: 4, note: null }
        ]
    },
    {
        id: "R1.03", nom: "Intro. architecture", type: "res",
        evals: [
            { nom: "DST + SAé", coef: 1, note: null }
        ]
    },
    {
        id: "R1.04", nom: "Intro. systèmes (OS)", type: "res",
        evals: [
            { nom: "Note unique", coef: 1, note: null } 
        ]
    },
    {
        id: "R1.05", nom: "Intro bases de données", type: "res",
        evals: [
            { nom: "DST1", coef: 1, note: null },
            { nom: "DST2", coef: 1, note: null }
        ]
    },
    {
        id: "R1.06", nom: "Maths discrètes", type: "res",
        evals: [
            { nom: "Interro Logique", coef: 1, note: null },
            { nom: "DST Logique", coef: 3, note: null },
            { nom: "Interro Num. & Arith.", coef: 2, note: null },
            { nom: "DST Final", coef: 6, note: null }
        ]
    },
    {
        id: "R1.07", nom: "Outils maths", type: "res",
        evals: [
            { nom: "Interro Gauss", coef: 1, note: null },
            { nom: "DST Algèbre", coef: 3, note: null }
        ]
    },
    {
        id: "R1.08", nom: "Gestion de projet", type: "res",
        evals: [
            { nom: "Oral de TD", coef: 0.4, note: null },
            { nom: "DST final", coef: 0.6, note: null }
        ]
    },
    {
        id: "R1.09", nom: "Éco durable", type: "res",
        evals: [
            { nom: "DST", coef: 1, note: null }
        ]
    },
    {
        id: "R1.10", nom: "Anglais technique", type: "res",
        evals: [
            { nom: "DST", coef: 4, note: null },
            { nom: "Contrôle continu", coef: 4, note: null },
            { nom: "SAé", coef: 2, note: null }
        ]
    },
    {
        id: "R1.11", nom: "Communication", type: "res",
        evals: [
            { nom: "Eloquence", coef: 1, note: null },
            { nom: "Revue de presse", coef: 0.5, note: null },
            { nom: "Création", coef: 0.5, note: null }
        ]
    },
    {
        id: "R1.12", nom: "PPP", type: "res",
        evals: [
            { nom: "PPP S1 : écrit", coef: 0.5, note: null },
            { nom: "PPP S1 : oral", coef: 0.5, note: null }
        ]
    },

    
    {
        id: "S1.01", nom: "Implémentation besoin client", type: "sae",
        evals: [
            { nom: "DST", coef: 1, note: null },
            { nom: "Projet", coef: 3, note: null }
        ]
    },
    {
        id: "S1.02", nom: "Comparaison algo", type: "sae",
        evals: [
            { nom: "DST", coef: 1, note: null },
            { nom: "Projet", coef: 3, note: null }
        ]
    },
    {
        id: "S1.03", nom: "Install. poste dév.", type: "sae",
        evals: [
            { nom: "Note unique", coef: 1, note: null }
        ]
    },
    {
        id: "S1.04", nom: "Création BDD", type: "sae",
        evals: [
            { nom: "Note SAé (groupe + dst)", coef: 1, note: null }
        ]
    },
    {
        id: "S1.05", nom: "Recueil de besoins", type: "sae",
        evals: [
            { nom: "Rendu final", coef: 2, note: null },
            { nom: "Oral intermédiaire", coef: 3, note: null }
        ]
    },
    {
        id: "S1.06", nom: "Environnement éco.", type: "sae",
        evals: [
            { nom: "Oral + video + article", coef: 1, note: null }
        ]
    }
];


const ueConfig = {
    "UE1.1": { nom: "Réaliser", composantes: [
        { id: "R1.01", coef: 32 }, { id: "R1.02", coef: 12 }, { id: "R1.10", coef: 8 }, { id: "R1.12", coef: 8 }, { id: "S1.01", coef: 40 }
    ]},
    "UE1.2": { nom: "Optimiser", composantes: [
        { id: "R1.01", coef: 21 }, { id: "R1.03", coef: 9 }, { id: "R1.06", coef: 12 }, { id: "R1.07", coef: 12 }, { id: "R1.12", coef: 6 }, { id: "S1.02", coef: 40 }
    ]},
    "UE1.3": { nom: "Admin Sys", composantes: [
        { id: "R1.03", coef: 19 }, { id: "R1.04", coef: 19 }, { id: "R1.10", coef: 11 }, { id: "R1.11", coef: 6 }, { id: "R1.12", coef: 5 }, { id: "S1.03", coef: 40 }
    ]},
    "UE1.4": { nom: "Données", composantes: [
        { id: "R1.05", coef: 30 }, { id: "R1.06", coef: 14 }, { id: "R1.09", coef: 8 }, { id: "R1.12", coef: 8 }, { id: "S1.04", coef: 40 }
    ]},
    "UE1.5": { nom: "Conduire", composantes: [
        { id: "R1.02", coef: 16 }, { id: "R1.08", coef: 24 }, { id: "R1.11", coef: 12 }, { id: "R1.12", coef: 8 }, { id: "S1.05", coef: 40 }
    ]},
    "UE1.6": { nom: "Équipe", composantes: [
        { id: "R1.02", coef: 6 }, { id: "R1.08", coef: 12 }, { id: "R1.09", coef: 12 }, { id: "R1.10", coef: 12 }, { id: "R1.11", coef: 12 }, { id: "R1.12", coef: 6 }, { id: "S1.06", coef: 40 }
    ]}
};


function calculerMoyenneMatiere(matiere) {
    let totalPoints = 0;
    let totalCoefs = 0;
    let hasNote = false;

    matiere.evals.forEach(ev => {
        if (ev.note !== null && ev.note !== "" && !isNaN(ev.note)) {
            totalPoints += parseFloat(ev.note) * ev.coef;
            totalCoefs += ev.coef;
            hasNote = true;
        }
    });

    if (!hasNote || totalCoefs === 0) return null;
    return totalPoints / totalCoefs;
}


function calculerUEs() {
    const ueContainer = document.getElementById('ue-container');
    ueContainer.innerHTML = '';

    for (const [key, ue] of Object.entries(ueConfig)) {
        let totalPts = 0;
        let totalCoef = 0;

        ue.composantes.forEach(comp => {
            const matiere = matieresData.find(m => m.id === comp.id);
            if (matiere) {
                const moy = calculerMoyenneMatiere(matiere);
                if (moy !== null) {
                    totalPts += moy * comp.coef;
                    totalCoef += comp.coef;
                }
            }
        });

        const moyenneUE = totalCoef > 0 ? (totalPts / totalCoef).toFixed(2) : '--';
        
        const div = document.createElement('div');
        div.className = 'ue-box';
        div.innerHTML = `
            <span class="ue-name">${key} - ${ue.nom}</span>
            <span class="ue-average">${moyenneUE}</span>
        `;
        ueContainer.appendChild(div);
    }
}


function renderTable() {
    const tbody = document.getElementById('table-body');
    tbody.innerHTML = '';

    matieresData.forEach((mat, matIdx) => {
        const moy = calculerMoyenneMatiere(mat);
        const displayMoy = moy !== null ? moy.toFixed(2) : "~";
        const rowClass = mat.type === 'res' ? 'row-resource' : 'row-sae';

   
        const trMain = document.createElement('tr');
        trMain.className = rowClass;
        trMain.innerHTML = `
            <td>${mat.id} - ${mat.nom}</td>
            <td></td>
            <td class="col-note"><span class="moyenne-matiere">${displayMoy}</span></td>
        `;
        tbody.appendChild(trMain);

       
        mat.evals.forEach((ev, evIdx) => {
            const trSub = document.createElement('tr');
            trSub.className = 'row-sub';
            trSub.innerHTML = `
                <td class="sub-label">${ev.nom}</td>
                <td class="col-coef">${ev.coef}</td>
                <td class="col-note">
                    <input type="number" 
                           step="0.01" 
                           placeholder="~" 
                           value="${ev.note !== null ? ev.note : ''}"
                           oninput="updateNote(${matIdx}, ${evIdx}, this.value)">
                </td>
            `;
            tbody.appendChild(trSub);
        });
    });
}

function updateNote(matIdx, evIdx, value) {
    const val = value === "" ? null : parseFloat(value);
    matieresData[matIdx].evals[evIdx].note = val;
    

    localStorage.setItem('my_grades_backup', JSON.stringify(matieresData));
    
   
    renderTable(); 
    calculerUEs(); 
}

function init() {

    const saved = localStorage.getItem('my_grades_backup');
    if (saved) {
        const parsed = JSON.parse(saved);
        for(let i=0; i<parsed.length; i++) {
            matieresData[i].evals = parsed[i].evals;
        }
    }
    
    renderTable();
    calculerUEs();
}

function resetAll() {
    if(confirm("Tu es sûr de vouloir tt delet ?")) {
        localStorage.removeItem('my_grades_backup');
        location.reload();
    }
}


init();
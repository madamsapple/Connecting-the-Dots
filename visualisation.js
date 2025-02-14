import * as THREE from 'three';
import { OrbitControls } from 'OrbitControls';
import { FontLoader } from 'FontLoader';
import {GLTFLoader} from 'https://unpkg.com/three@0.161.0/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'https://unpkg.com/three@0.161.0/examples/jsm/loaders/DRACOLoader.js';

//import {clone} from 'https://unpkg.com/three@0.161.0/examples/jsm/utils/SkeletonUtils.js';
//import { Timer } from 'https://unpkg.com/three@0.161.0/examples/jsm/misc/Timer.js';


//see three.js version
//console.log(THREE.REVISION);

const line_color = 0xFF33FF;
const text_color = 0xFFF1DF;

//All titles; cleaned scraped datas
const sentences = [
    "AI: Its nature and future", "Nature and scope of AI techniques", "Advancing mathematics by guiding human intuition with AI", "Cooperative AI: machines must learn to find common ground", "Inhibition of early atherogenesis in transgenic mice by human apolipoprotein AI", "AI in health and medicine", "The global landscape of AI ethics guidelines", "Planning chemical syntheses with deep neural networks and symbolic AI", "Video-based AI for beat-to-beat assessment of cardiac function", "A definition, benchmark and database of AI for social good initiatives", "High-performance medicine: the convergence of human and artificial intelligence", "Artificial intelligence meets natural stupidity", "A fully automatic AI system for tooth and alveolar bone segmentation from cone-beam CT images", "Apolipoprotein AI structural organization in high-density lipoproteins isolated from human plasma", "Natural and artificial intelligence in neurosurgery: a systematic review", "Four ethical priorities for neurotechnologies and AI", "Principles alone cannot guarantee ethical AI", "Can we open the black box of AI?", "International evaluation of an AI system for breast cancer screening", "Repeated helical pattern in apolipoprotein-AI", "A survey of the state of explainable AI for natural language processing", "Adaptation in natural and artificial systems: an introductory analysis with applications to biology, control, and artificial intelligence", "Chatgpt and open-ai models: A preliminary review", "AI-powered drug discovery captures pharma interest", "AI-based pathology predicts origins for cancers of unknown primary", "Transparency and reproducibility in artificial intelligence", "Artificial intelligence vs. natural stupidity: Evaluating AI readiness for the vietnamese medical information system", "Efficient radical-based light-emitting diodes with doublet emission", "Review of big data analytics, artificial intelligence and nature-inspired computing models towards accurate detection of COVID-19 pandemic cases and contact tracing", "Using AI to write scholarly publications", "Advances, challenges and opportunities in creating data for trustworthy AI", "The basic AI drives", "AI for social good: unlocking the opportunity for positive impact", "Tourism, urbanization and natural resources rents matter for environmental sustainability: The leading role of AI and ICT on sustainable development goals in the digital era", "Natural and Artificial Intelligence: A brief introduction to the interplay between AI and neuroscience research", "Nature sunflower stalk pith with zwitterionic hydrogel coating for highly efficient and sustainable solar evaporation", "Where's the AI?", "Plant natural products: Promising resources for cancer chemoprevention", "Robotics, artificial intelligence, and the evolving nature of work", "Ectopic b-chain of ATP synthase is an apolipoprotein AI receptor in hepatic HDL endocytosis", "What is AI, anyway?", "Linkage of human apolipoproteins AI and C-III genes", "Studies on AI-77s, microbial products with gastroprotective activity. Structures and the chemical nature of AI-77s", "Dynamic optimal energy flow in the integrated natural gas and electrical power systems", "AI in mental health", "Natural biomacromolecule based composite scaffolds from silk fibroin, gelatin and chitosan toward tissue engineering applications", "The measure of all minds: evaluating natural and artificial intelligence", "Understanding the coupled natural and human systems in Dryland East Asia", "Why AI is harder than we think", "Artificial intelligence within the interplay between natural and artificial computation: Advances in data science, trends and applications", "Effects of dietary n-3 highly unsaturated fatty acids on growth, nonspecific immunity, expression of some immune related genes and disease resistance of large yellow croaker (Larmichthys crocea) following natural infestation of parasites (Cryptocaryon irritans)", "Wanli: Worker and ai collaboration for natural language inference dataset creation", "Artificial intelligence and natural resource management", "Scientific discovery in the age of artificial intelligence", "Foundation models for generalist medical artificial intelligence", "Artificial intelligence approaches using natural language processing to advance EHR-based clinical research", "Coordinated regional-district operation of integrated energy systems for resilience enhancement in natural disasters", "Natural variation in PTB1 regulates rice seed setting rate by controlling pollen tube growth", "The role of artificial intelligence in achieving the Sustainable Development Goals", "The natural history of pigment epithelial detachment associated with central serous chorioretinopathy", "The European Legislation on AI: A brief analysis of its philosophical approach", "Saffron: a natural potent antioxidant as a promising anti-obesity drug", "A survey on explainable artificial intelligence (xai): Toward medical xai", "AI did not write this manuscript, or did it? Can we trick the AI text detector into generated texts? The potential future of ChatGPT and AI in Sports & Exercise Medicine manuscript generation", "Microstructure of isotropic materials with negative Poisson's ratio", "The nature of modeling", "An AI boost for clinical trials", "GPT-3: Its nature, scope, limits, and consequences", "Defective acidification of intracellular organelles in cystic fibrosis", "Probabilistic machine learning and artificial intelligence", "Drug discovery with explainable artificial intelligence", "The practical implementation of artificial intelligence technologies in medicine", "Synthesis and superconducting properties of the strontium copper oxy-fluoride Sr2CuO2F2", "The future of AI in medicine: a perspective from a Chatbot", "Open AI in education, the responsible and ethical use of ChatGPT towards lifelong learning", "Global evolution of research in artificial intelligence in health and medicine: a bibliometric study", "Emergent computation: self-organizing, collective, and cooperative phenomena in natural and artificial computing networks", "Artificial intelligence in radiology", "There is a blind spot in AI research", "What is artificial intelligence?", "The promise and peril of generative AI", "Interference with AI-2-mediated bacterial cell-cell communication", "Social situatedness of natural and artificial intelligence: Vygotsky and beyond", "A long-duration gamma-ray burst with a peculiar origin", "Natural semantics in artificial intelligence", "Evaluating eligibility criteria of oncology trials using real-world data and AI", "Artificial intelligence", "Integrin-YAP/TAZ-JNK cascade mediates atheroprotective effect of unidirectional shear flow", "Acid sensing by the Drosophila olfactory system", "Natural intelligence in design", "Rethink government with AI", "Multimodal biomedical AI", "Assessment methods and performance metrics for redox flow batteries", "A sociotechnical perspective for the future of AI: narratives, inequalities, and human control", "Artificial intelligence and illusions of understanding in scientific research", "In vivo covalent cross-linking of photon-converted rare-earth nanostructures for tumour localization and theranostics", "On the track of artificial intelligence: Learning with intelligent personal assistants", "Efficient polymer solar cells employing a non-conjugated small-molecule electrolyte", "Adaptation and possible ancient interspecies introgression in pigs identified by whole-genome sequencing", "AI for radiographic COVID-19 detection selects shortcuts over signal", "y-secretase inhibitors reverse glucocorticoid resistance in T cell acute lymphoblastic leukemia", "A deep learning system for differential diagnosis of skin diseases", "Non-flammable electrolytes with high salt-to-solvent ratios for Li-ion and Li-metal batteries", "On abstract intelligence: Toward a unifying theory of natural, artificial, machinable, and computational intelligence", "From local explanations to global understanding with explainable AI for trees", "Visualizing lipid-formulated siRNA release from endosomes and target gene knockdown", "Artificial intelligence in drug discovery and development", "The polar nature of 7-ketocholesterol determines its location within membrane domains and the kinetics of membrane microsolubilization by apolipoprotein AI", "A developmental landscape of 3D-cultured human pre-gastrulation embryos", "Precisiated natural language (PNL)", "Fluorescent protein FRET pairs for ratiometric imaging of dual biosensors", "AI can be sexist and racist - it's time to make it fair", "Reboot for the AI revolution", "uORF-mediated translation allows engineered plant disease resistance without fitness costs", "Evaluation and accurate diagnoses of pediatric diseases using artificial intelligence", "Manipulating spin polarization of titanium dioxide for efficient photocatalysis", "DMSO-catalysed late-stage chlorination of (hetero) arenes", "Artificial intelligence for a better future: an ecosystem perspective on the ethics of AI and emerging digital technologies", "Ethical standards in robotics and AI", "cGAS-like receptors sense RNA and control 32-cGAMP signalling in Drosophila", "Genome-wide association study of esophageal squamous cell carcinoma in Chinese subjects identifies a susceptibility locus at PLCE1", "AM: A case study in AI methodology", "Artificial intelligence in healthcare", "Two cGAS-like receptors induce antiviral immunity in Drosophila", "ABO genotype alters the gut microbiota by regulating GalNAc levels in pigs", "Revolutionizing education with AI: Exploring the transformative potential of ChatGPT", "Synthesis of orthogonally assembled 3D cross-stacked metal oxide semiconducting nanowires", "Efficient oxygen evolution electrocatalysis in acid by a perovskite with face-sharing IrO6 octahedral dimers", "Application of machine/statistical learning, artificial intelligence and statistical experimental design for the modeling and optimization of methylene blue and Cd removal from a binary aqueous solution by natural walnut carbon", "The nature of expertise", "Harnessing the Power of AI to Create Intelligent Tutoring Systems for Enhanced Classroom Experience and Improved Learning Outcomes", "Amelioration of Alzheimer's disease pathology by mitophagy inducers identified via machine learning and a cross-species workflow", "A massive 7T fMRI dataset to bridge cognitive neuroscience and artificial intelligence", "Explainable AI: the new 42?", "How artificial intelligence will affect the practice of law", "The evolution and pathogenic mechanisms of the rice sheath blight pathogen", "Noncovalent Close Contacts in Fluorinated Thiophene-Phenylene-Thiophene Conjugated Units: Understanding the Nature and Dominance of OH versus SF", "Encapsulation of sulfur with thin-layered nickel-based hydroxides for long-cyclic lithium-sulfur cells", "Underdiagnosis bias of artificial intelligence algorithms applied to chest radiographs in under-served patient populations", "The nearly complete genome of Ginkgo biloba illuminates gymnosperm evolution", "Aligning academia and industry for unified battery performance metrics", "All-solution processed polymer light-emitting diode displays", "Artificial intelligence and its role in near future", "Chiral gold nanoparticles enantioselectively rescue memory deficits in a mouse model of Alzheimer's disease", "Google Duplex: An AI System for Accomplish-ing Real-World Tasks Over the Phone", "General intelligence disentangled via a generality metric for natural and artificial intelligence", "Natural language processing", "Histamine deficiency promotes inflammation-associated carcinogenesis through reduced myeloid maturation and accumulation of CD11b+Ly6G+ immature myeloid cells", "High stability and luminescence efficiency in donor-acceptor neutral radicals not following the Aufbau principle", "Photonics for artificial intelligence and neuromorphic computing", "It will change everything: DeepMind's AI makes gigantic leap in solving protein structures", "Artificial intelligence for diagnosis and Gleason grading of prostate cancer: the PANDA challenge", "Artificial intelligence-enabled rapid diagnosis of patients with COVID-19", "Inference in artificial intelligence with deep optics and photonics", "Predicting gastric cancer outcome from resected lymph node histopathology images using deep learning", "Mutant KRAS-driven cancers depend on PTPN11/SHP2 phosphatase", "Distinct transcription factor networks control neutrophil-driven inflammation", "AI-generated characters for supporting personalized learning and well-being", "Data augmentation approaches in natural language processing: A survey", "Heterozygous loss of Six5 in mice is sufficient to cause ocular cataracts", "How AI technology can tame the scientific literature", "Population sequencing enhances understanding of tea plant evolution", "Responsible AI for conservation", "Artificial intelligence: definition, trends, techniques, and cases", "AI enabled sign language recognition and VR space bidirectional communication using triboelectric smart glove", "Suppressing quantum errors by scaling a surface code logical qubit", "Let's talk about race: Identity, chatbots, and AI", "Heterogeneity and predictors of the effects of AI assistance on radiologists", "What's next for the AI protein-folding revolution", "Comprehensive epigenetic landscape of rheumatoid arthritis fibroblast-like synoviocytes", "Mastering atari, go, chess and shogi by planning with a learned model", "Rethinking drug design in the artificial intelligence era", "How AI and neuroscience drive each other forwards", "Artificial intelligence-enhanced electrocardiography in cardiovascular disease management", "One AI or many?", "Rationalization: A neural machine translation approach to generating natural language explanations", "Sustainable AI: AI for sustainability and the sustainability of AI", "Implementation of a Chatbot System using AI and NLP", "Artificial intelligence for the detection of COVID-19 pneumonia on chest CT using multinational datasets", "Joint-specific DNA methylation and transcriptome signatures in rheumatoid arthritis identify distinct pathogenic processes", "Multispectral optoacoustic imaging of dynamic redox correlation and pathophysiological progression utilizing upconversion nanoprobes", "Engaged to a robot? The role of AI in service", "Relational inductive biases, deep learning, and graph networks", "Harnessing the intracellular triacylglycerols for titer improvement of polyketides in Streptomyces", "A preferential, pattern-seeking, semantics for natural language inference", "Ethics of artificial intelligence", "Developing a Curriculum for Ethical and Responsible AI: A University Course on Safety, Fairness, Privacy, and Ethics to Prepare Next Generation of AI Professionals", "Concerted genomic targeting of H3K27 demethylase REF6 and chromatin-remodeling ATPase BRM in Arabidopsis", "Assessing the impact of generative AI on medicinal chemistry", "The atlas of AI: Power, politics, and the planetary costs of artificial intelligence", "A quality assessment tool for artificial intelligence-centered diagnostic test accuracy studies: QUADAS-AI", "Screening for cardiac contractile dysfunction using an artificial intelligence-enabled electrocardiogram", "Generative artificial intelligence (AI) powered conversational educational agents: The inevitable paradigm shift", "Artificial intelligence and big data in entrepreneurship: a new era has begun", "Development and evaluation of an artificial intelligence system for COVID-19 diagnosis", "Boosting fast energy storage by synergistic engineering of carbon and deficiency", "How medical AI devices are evaluated: limitations and recommendations from an analysis of FDA approvals", "Employing adaptive learning and intelligent tutoring robots for virtual classrooms and smart campuses: reforming education in the age of artificial intelligence", "Chemically ubiquitylated PCNA as a probe for eukaryotic translesion DNA synthesis", "Artificial intelligence-enabled electrocardiograms for identification of patients with low ejection fraction: a pragmatic, randomized clinical trial", "Minimum information about clinical artificial intelligence modeling: the MI-CLAIM checklist", "Synthetic organic chemistry driven by artificial intelligence", "Taste-independent nutrient selection is mediated by a brain-specific Na+/solute co-transporter in Drosophila", "Kruppel-like factor 4 (KLF4) is required for maintenance of breast cancer stem cells and for cell migration and invasion", "The artificial intelligence clinician learns optimal treatment strategies for sepsis in intensive care", "Governing AI safety through independent audits", "AI for medical imaging goes deep", "Artificial intelligence (AI) applications for marketing: A literature-based study", "Swarm intelligence: from natural to artificial systems", "The intrinsic factor-vitamin B12 receptor, cubilin, is a high-affinity apolipoprotein AI receptor facilitating endocytosis of high-density lipoprotein", "AI in medicine must be explainable", "A super pan-genomic landscape of rice", "How artificial intelligence is changing drug discovery", "A conversation on artificial intelligence, chatbots, and plagiarism in higher education", "Nanotechnology and artificial intelligence to enable sustainable and precision agriculture", "An artificial intelligence platform for the multihospital collaborative management of congenital cataracts", "Profiling chromatin states using single-cell itChIP-seq", "Red-shifted luciferase-luciferin pairs for enhanced bioluminescence imaging", "Natural killer cells from the subcutaneous adipose tissue underexpress the NKp30 and NKp44 in obese persons and are less active against major histocompatibility complex class I non-expressing neoplastic cells", "Applications of artificial intelligence for disaster management", "Conversational ai: Dialogue systems, conversational agents, and chatbots", "Artificial intelligence in radiation oncology", "Artificial intelligence (AI) in healthcare and biomedical research: Why a strong computational/AI bioethics framework is required?", "A new era: artificial intelligence and machine learning in prostate cancer", "AI-based chatbots in customer service and their effects on user compliance", "Knowledge representation in Sanskrit and artificial intelligence", "Vision, challenges, roles and research issues of Artificial Intelligence in Education", "Molecular targets of aspirin and cancer prevention", "Artificial intelligence for remote sensing data analysis: A review of challenges and opportunities", "DECIDE-AI: new reporting guidelines to bridge the development-to-implementation gap in clinical artificial intelligence", "TEAM: An experiment in the design of transportable natural-language interfaces", "Discourse strategies for generating natural-language text", "Artificial intelligence in sepsis early prediction and diagnosis using unstructured data in healthcare", "An introduction to ethics in robotics and AI", "Don't let industry write the rules for AI", "Facial Analytics or Virtual Avatars: Competencies and Design Considerations for Student-Teacher Interaction in AI-Powered Online Education for Effective Classroom Engagement", "The nature of heuristics", "Identification of metabolic vulnerabilities of receptor tyrosine kinases-driven cancer", "Inkjet-printed unclonable quantum dot fluorescent anti-counterfeiting labels with artificial intelligence authentication", "Monitoring thioredoxin redox with a genetically encoded red fluorescent biosensor", "Lexical knowledge representation and natural language processing", "Efficient quantum simulation of photosynthetic light harvesting", "CMOS-integrated memristive non-volatile computing-in-memory for AI edge processors", "Artificial intelligence in digital pathology-new tools for diagnosis and precision oncology", "Comparative genomic analysis of esophageal squamous cell carcinoma between Asian and Caucasian patient populations", "Explainable AI: interpreting, explaining and visualizing deep learning", "EURISKO: a program that learns new heuristics and domain concepts: the nature of heuristics III: program design and results", "ChatGPT and a new academic reality: Artificial Intelligence-written research papers and the ethics of the large language models in scholarly publishing", "Artificial intelligence and the limits of legal personality", "Cloning of the galactokinase cDNA and identification of mutations in two families with cataracts", "Artificial intelligence with uncertainty", "Logical, philosophical and ethical aspects of AI in medicine", "Clinical artificial intelligence quality improvement: towards continual monitoring and updating of AI algorithms in healthcare", "An open resource for transdiagnostic research in pediatric mental health and learning disorders", "Biomimetic design through natural language analysis to facilitate cross-domain information retrieval", "Examining artificial intelligence (AI) technologies in marketing via a global lens: Current trends and future research opportunities", "Comprehensive gene expression profiling and immunohistochemical studies support application of immunophenotypic algorithm for molecular subtype classification in diffuse large B-cell lymphoma", "Reporting guidelines for clinical trials evaluating artificial intelligence interventions are needed", "The artificial intelligence of the ethics of artificial intelligence", "Predicting cancer outcomes with radiomics and artificial intelligence in radiology", "Explainable artificial intelligence model to predict acute critical illness from electronic health records", "Artificial intelligence", "PRMT2 links histone H3R8 asymmetric dimethylation to oncogenic activation and tumorigenesis of glioblastoma", "A CMOS-integrated compute-in-memory macro based on resistive random-access memory for AI edge devices", "Bringing chatbots into education: Towards natural language negotiation of open learner models", "Apolipoprotein AI prevents regulatory to follicular helper T cell switching during atherosclerosis", "Accelerating antibiotic discovery through artificial intelligence", "AI-based modeling: techniques, applications and research issues towards automation, intelligent and smart systems", "Clinically applicable deep learning for diagnosis and referral in retinal disease", "Anticholinesterase and Antioxidant Activities of Fucoxanthin Purified from the Microalga Phaeodactylum Tricornutum", "An augmented reality microscope with real-time artificial intelligence integration for cancer diagnosis", "Observation of a d-wave nodal liquid in highly underdoped Bi2Sr2CaCu2O8+", "Proceedings of the AHFE 2021 Virtual Conferences on Human Factors in Software and Systems Engineering, Artificial Intelligence and Social Computing, and Energy", "An overview of empirical natural language processing", "A mutant-cell library for systematic analysis of heparan sulfate structure-function relationships", "Crystal Structure of the Intermetallic Compound Mg32(AI,Zn)49 and Related Phases", "A large, open source dataset of stroke anatomical brain images and manual lesion segmentations", "Planning with Markov decision processes: An AI perspective", "Machine learning for molecular and materials science", "Structural identification of a bacterial quorum-sensing signal containing boron", "Generative AI for designing and validating easily synthesizable and structurally novel antibiotics", "Research status and applications of nature-inspired algorithms for agri-food production", "Experimental evidence on the productivity effects of generative artificial intelligence", "Human-centered explainable ai: Towards a reflective sociotechnical approach", "Study on artificial intelligence: The state of the art and future prospects", "Comprehensive Implementation of TextCNN for Enhanced Collaboration between Natural Language Processing and System Recommendation", "AI for life: Trends in artificial intelligence for biotechnology", "piRNA-823 contributes to tumorigenesis by regulating de novo DNA methylation and angiogenesis in multiple myeloma", "Developing specific reporting guidelines for diagnostic accuracy studies assessing AI interventions: The STARD-AI Steering Group", "LsrR-binding site recognition and regulatory characteristics in Escherichia coli AI-2 quorum sensing", "From machine learning to explainable AI", "Electrospun cellulose acetate/gelatin nanofibrous wound dressing containing berberine for diabetic foot ulcer healing: in vitro and in vivo studies", "SenticNet 7: A commonsense-based neurosymbolic AI framework for explainable sentiment analysis", "Extremely stable amidoxime functionalized covalent organic frameworks for uranium extraction from seawater with high efficiency and selectivity", "The state of artificial intelligence-based FDA-approved medical devices and algorithms: an online database", "De novo generation of hit-like molecules from gene expression signatures using artificial intelligence", "The feeling economy: Managing in the next generation of artificial intelligence (AI)", "The Ai project: historical and ecological contexts", "Dual use of artificial-intelligence-powered drug discovery", "Deep semantic segmentation of natural and medical images: a review", "Idtracker. ai: tracking all individuals in small or large collectives of unmarked animals", "Automated synthesis of oxygen-producing catalysts from Martian meteorites by a robotic AI chemist", "Do as AI say: susceptibility in deployment of clinical decision-aids", "Natural language processing", "Structural and functional brain scans from the cross-sectional Southwest University adult lifespan dataset", "Interplay between the Westerlies and Asian monsoon recorded in Lake Qinghai sediments since 32 ka", "A concise introduction to multiagent systems and distributed artificial intelligence", "Machine learning and AI for risk management", "Synthesis of branched silica nanotrees using a nanodroplet sequential fusion strategy", "The potential for artificial intelligence in healthcare", "The C-terminal domain of apolipoprotein AI contains a lipid-sensitive conformational trigger", "Natural language based financial forecasting: a survey", "Empowering things with intelligence: a survey of the progress, challenges, and opportunities in artificial intelligence of things", "A survey on artificial intelligence trends in spacecraft guidance dynamics and control", "Block5GIntell: Blockchain for AI-enabled 5G networks", "Artificial intelligence predicts the progression of diabetic kidney disease using big data machine learning", "Harms of AI", "Natural language assistant: A dialog system for online product recommendation", "Pragmatics and natural language generation", "Harnessing big 'omics' data and AI for drug discovery in hepatocellular carcinoma", "The active inference approach to ecological perception: general information dynamics for natural and artificial embodied cognition", "Pivotal trial of an autonomous AI-based diagnostic system for detection of diabetic retinopathy in primary care offices", "Desiderata for delivering NLP to accelerate healthcare AI advancement and a Mayo Clinic NLP-as-a-service implementation", "Apolipoprotein AI mimetic peptides and their role in atherosclerosis prevention", "Solution structure of discoidal high-density lipoprotein particles with a shortened apolipoprotein AI", "Case systems for natural language", "AI-2-mediated signalling in bacteria", "An inherited polymorphism in the human apolipoprotein AI gene locus related to the development of atherosclerosis", "Sex and gender differences and biases in artificial intelligence for biomedicine and healthcare", "The ethical implications of using artificial intelligence in auditing", "Discovery of a novel ferroptosis inducer-talaroconvolutin A-killing colorectal cancer cells in vitro and in vivo", "Familial combined hyperlipidaemia linked to the apolipoprotein AI-CIII-AIV gene cluster on chromosome 11q23q-q24", "Statistical techniques for natural language parsing", "Artificial intelligence versus Maya Angelou: Experimental evidence that people cannot differentiate AI-generated from human-written poetry", "Artificial intelligence (AI) technology in OpenAI ChatGPT application: A review of ChatGPT in writing English essay", "The origin of fluorescence from graphene oxide", "Cooperative responses from a portable natural language query system", "Can artificial intelligence help for scientific writing?", "A survey of explainable AI terminology", "The oral microbiota-a mechanistic role for systemic diseases", "Google's AI chatbot Bard: a side-by-side comparison with ChatGPT and its utilization in ophthalmology", "Challenges and opportunities: from big data to knowledge in AI 2.0", "Removal of the natural hormone estrone from aqueous solutions using nanofiltration and reverse osmosis", "Scripts, plans, goals, and understanding: An inquiry into human knowledge structures", "Manganese superoxide dismutase promotes anoikis resistance and tumor metastasis", "Genetic programming as a means for programming computers by natural selection", "Decentralized ai: Edge intelligence and smart blockchain, metaverse, web3, and desci", "The effects of explainability and causability on perception, trust, and acceptance: Implications for explainable AI", "Artificial intelligence in chemistry: current trends and future directions", "Regulatory alternatives for AI", "Current status and applications of Artificial Intelligence (AI) in medical field: An overview", "Transparent medical image AI via an image-text foundation model grounded in medical literature", "A low cost, all-organic Na-ion battery based on polymeric cathode and anode", "Machine learning applications to clinical decision support in neurosurgery: an artificial intelligence augmented systematic review", "A nice and friendly chat with a bot: User perceptions of AI-based service agents", "Plan-based integration of natural language and graphics generation", "Molecular representations in AI-driven drug discovery: a review and practical guide", "3D printed reversible shape changing components with stimuli responsive materials", "Long noncoding RNA CRNDE stabilized by hnRNPUL2 accelerates cell proliferation and migration in colorectal carcinoma via activating Ras/MAPK signaling pathways", "The death of the short-form physics essay in the coming AI revolution", "The IDEAL framework for surgical robotics: development, comparative evaluation and long-term monitoring", "How the body shapes the way we think: a new view of intelligence", "Generalized quantifiers and natural language", "Formalizing trust in artificial intelligence: Prerequisites, causes and goals of human trust in AI", "PICK1-mediated GluR2 endocytosis contributes to cellular injury after neuronal trauma", "Artificial intelligence for precision medicine in neurodevelopmental disorders", "Conversational ai: The science behind the alexa prize", "Intraperitoneal injection (IP), Intravenous injection (IV) or anal injection (AI)? Best way for mesenchymal stem cells transplantation for colitis", "Proposal for applicability of neutrosophic set theory in medical AI", "A core-shell-shell nanoplatform upconverting near-infrared light at 808 nm for luminescence imaging and photodynamic therapy of cancer", "Developing next generation antimicrobials by intercepting AI-2 mediated quorum sensing", "Techniques for supercharging academic writing with generative AI", "Directions for AI in the eighties", "TacticAI: an AI assistant for football tactics", "More than 'If Time Allows' the role of ethics in AI education", "Ethics of Artificial Intelligence", "A linguistic ontology of space for natural language processing", "Lexical ambiguity resolution: Perspective from psycholinguistics, neuropsychology and artificial intelligence", "'An ideal human' expectations of AI teammates in human-AI teaming", "Generative AI and science communication in the physical sciences", "The role of ChatGPT in data science: how ai-assisted conversational interfaces are revolutionizing the field", "The effect of environmental heterogeneity on species richness depends on community position along the environmental gradient", "The criminal liability of artificial intelligence entities-from science fiction to legal social control", "Peeking inside the black-box: a survey on explainable artificial intelligence (XAI)", "The role and challenges of education for responsible AI", "Artificial intelligence cooperation to support the global response to COVID-19", "AI Watch. Defining Artificial Intelligence. Towards an operational definition and taxonomy of artificial intelligence", "Classifying free-text triage chief complaints into syndromic categories with natural language processing", "Ai-driven cybersecurity: an overview, security intelligence modeling and research directions", "What can AI do for me? evaluating machine learning interpretations in cooperative play", "Readings in distributed artificial intelligence", "CarcinoPred-EL: Novel models for predicting the carcinogenicity of chemicals using molecular fingerprints and ensemble learning methods", "Transcranial focused ultrasound neuromodulation of the human primary motor cortex", "Reframing AI discourse", "Tom20 senses iron-activated ROS signaling to promote melanoma cell pyroptosis", "Serum concentrations of cholesterol, apolipoprotein AI and apolipoprotein B in a total of 1694 meat-eaters, fish-eaters, vegetarians and vegans", "A reference framework and overall planning of industrial artificial intelligence (I-AI) for new application scenarios", "A primer on neural network models for natural language processing", "Fundamentals of artificial intelligence", "Opportunities and adoption challenges of AI in the construction industry: A PRISMA review", "Principles of artificial intelligence", "Predicting blast-induced air overpressure: a robust artificial intelligence system based on artificial neural networks and random forest", "The need for a system view to regulate artificial intelligence/machine learning-based software as medical device", "Should robots replace teachers?: AI and the future of education", "Artificial intelligence powers digital medicine", "Brave new world? On AI and the management of customer relationships", "Artificial intelligence: A very short introduction", "Image segmentation", "User interaction with AI-enabled systems: A systematic review of IS research", "Transformative effects of ChatGPT on modern education: Emerging Era of AI Chatbots", "Neurosymbolic AI: the 3rd wave", "Projective simulation for artificial intelligence", "Theory formation by heuristic search: The nature of heuristics II: background and examples", "Artificial intelligence and tutoring systems: Computational and cognitive approaches to the communication of knowledge", "15 challenges for AI: or what AI (currently) can't do", "With an eye to AI and autonomous diagnosis", "Further studies to quantify the dose of natural aerosols of foot-and-mouth disease virus for pigs", "The effectiveness of pressure therapy (15-25 mmHg) for hypertrophic burn scars: a systematic review and meta-analysis", "Disorganization of white matter architecture in major depressive disorder: a meta-analysis of diffusion tensor imaging with tract-based spatial statistics", "Regulation of FADS2 transcription by SREBP-1 and PPAR-a influences LC-PUFA biosynthesis in fish", "Hybrid collective intelligence in a human-AI society", "ChatGPT and the rise of large language models: the new AI-driven infodemic threat in public health", "Artificial intelligence in education: Addressing ethical challenges in K-12 settings", "Artificial intelligence in marketing: Topic modeling, scientometric analysis, and research agenda", "Applications of digital health for public health responses to COVID-19: a systematic scoping review of artificial intelligence, telehealth and related technologies", "An embedded ethics approach for AI development", "AI-assisted peer review", "The potential of artificial intelligence to improve patient safety: a scoping review", "Artificial intelligence in the neonatal intensive care unit: the time is now", "Artificial intelligence for HR: Use AI to support and develop a successful workforce", "Tetrandrine blocks autophagic flux and induces apoptosis via energetic impairment in cancer cells", "Uncovering miRNAs involved in crosstalk between nutrient deficiencies in Arabidopsis", "From chatgpt to threatgpt: Impact of generative ai in cybersecurity and privacy", "Robothor: An open simulation-to-real embodied ai platform", "Game AI revisited", "Conversational AI: Social and Ethical Considerations.", "ZBP1 mediates interferon-induced necroptosis", "The inconvenient truth about AI in healthcare", "Artificial intelligence for sustainability: Challenges, opportunities, and a research agenda", "Liability for damages caused by artificial intelligence", "Introduction to artificial intelligence", "AI for Games", "The structure of ill-structured solutions: Boundary objects and heterogeneous distributed problem solving", "Natural-language interfaces", "What can ChatGPT do? Analyzing early reactions to the innovative AI chatbot on Twitter", "The creative mind: Myths and mechanisms", "Cardioprotective effects of Notoginsenoside R1 against ischemia/reperfusion injuries by regulating oxidative stress-and endoplasmic reticulum stress-related signaling pathways", "Virome analysis for identification of novel mammalian viruses in bats from Southeast China", "Statistical language learning", "Artificial intelligence (AI) student assistants in the classroom: Designing chatbots to support student success", "A short guide for medical professionals in the era of artificial intelligence", "A multilayer multimodal detection and prediction model based on explainable artificial intelligence for Alzheimer's disease", "The AI index 2021 annual report", "A high-level overview of AI ethics", "Open problems in cooperative ai", "On the opportunities and risks of foundation models", "Towards understanding the interplay of generative artificial intelligence and the Internet", "An AI readability formula for French as a foreign language", "Revolutionizing healthcare: the role of artificial intelligence in clinical practice", "Patients' views of wearable devices and AI in healthcare: findings from the ComPaRe e-cohort", "Recent advances in nanozymes: from matters to bioapplications", "Ginsenoside Rg1 protects against ischemic/reperfusion-induced neuronal injury through miR-144/Nrf2/ARE pathway", "The big red button is too late: an alternative model for the ethical evaluation of AI systems", "The clinician-AI interface: intended use and explainability in FDA-cleared AI devices for medical image interpretation", "Changes in SBPase activity influence photosynthetic capacity, growth, and tolerance to chilling stress in transgenic tomato plants", "What's inside the black box? AI challenges for lawyers and researchers", "Towards AI-powered personalization in MOOC learning", "Polydopamine and its derivative materials: synthesis and promising applications in energy, environmental, and biomedical fields", "Adopting artificial intelligence in cardiovascular medicine: A scoping review", "Looking beyond the hype: applied AI and machine learning in translational medicine", "Towards mutual theory of mind in human-ai interaction: How language reflects what students perceive about a virtual teaching assistant", "What the near future of artificial intelligence could be", "Natural phenolic compounds for the control of oxidation, bacterial spoilage, and foodborne pathogens in meat", "Semantic similarity in a taxonomy: An information-based measure and its application to problems of ambiguity in natural language", "Biomass-derived carbon materials for high-performance supercapacitor electrodes", "Artificial intelligence and machine learning in clinical development: a translational perspective", "Preparing teachers for the application of AI-powered technologies in foreign language education", "Induction, conceptual spaces and AI", "Artificial intelligence and patient-centered decision-making", "Artificial intelligence (AI) and its implications for market knowledge in B2B marketing", "A DNA insertion in the apolipoprotein AI gene of patients with premature atherosclerosis", "The dark secret at the heart of AI", "Artificial intelligence as augmenting automation: Implications for employment", "Encapsulation of Fe3O4 Nanoparticles into N, S co-Doped Graphene Sheets with Greatly Enhanced Electrochemical Performance", "Artificial intelligence for diabetic retinopathy screening: a review", "Charge effects in the fractionation of natural organics using ultrafiltration", "Synthesis and characterization of spinel type ZnCo2O4 as a novel anode material for lithium ion batteries", "Apocalyptic AI: Religion and the promise of artificial intelligence", "Wikipedia-based semantic interpretation for natural language processing", "Introduction to artificial intelligence", "Inverse molecular design using machine learning: Generative models for matter engineering", "AI in CAI: An artificial-intelligence approach to computer-assisted instruction", "ChatGPT in medicine: an overview of its applications, advantages, limitations, future prospects, and ethical considerations", "Debates on the nature of artificial general intelligence", "Survey of the state of the art in natural language generation: Core tasks, applications and evaluation", "Structural models of human apolipoprotein AI: a critical analysis and review", "Frontline encounters of the AI kind: An evolved service encounter framework", "A new direction in AI: Toward a computational theory of perceptions", "Ultrafiltration of natural organic matter", "Applications of Artificial Intelligence (AI) in healthcare: A review", "A superhydrophobic sponge with excellent absorbency and flame retardancy", "AI in Education", "Co-designing checklists to understand organizational challenges and opportunities around fairness in AI", "Artificial intelligence for decision making in the era of Big Data - evolution, challenges and research agenda", "Trust in AI and its role in the acceptance of AI technologies", "Cross species quorum quenching using a native AI-2 processing enzyme", "Forecasting artificial intelligence on online customer assistance: Evidence from chatbot patents analysis", "A comprehensive survey of ai-generated content (aigc): A history of generative ai from gan to chatgpt"
];

//dict obj of all unique words (occuring more than once) across all titles
const uniq_words = {
    "ai": 218,
    "its": 11,
    "nature": 16,
    "and": 247,
    "future": 12,
    "scope": 2,
    "of": 235,
    "techniques": 5,
    "by": 25,
    "human": 20,
    "with": 43,
    "cooperative": 5,
    "must": 2,
    "to": 58,
    "early": 3,
    "in": 182,
    "transgenic": 2,
    "mice": 2,
    "apolipoprotein": 16,
    "health": 8,
    "medicine": 13,
    "the": 173,
    "global": 5,
    "landscape": 4,
    "ethics": 11,
    "guidelines": 4,
    "planning": 4,
    "chemical": 2,
    "deep": 9,
    "neural": 4,
    "networks": 6,
    "based": 23,
    "for": 142,
    "beat": 2,
    "assessment": 3,
    "cardiac": 2,
    "function": 2,
    "a": 125,
    "definition": 3,
    "database": 2,
    "social": 6,
    "good": 2,
    "high": 10,
    "performance": 5,
    "artificial": 162,
    "intelligence": 165,
    "natural": 66,
    "stupidity": 2,
    "system": 14,
    "segmentation": 3,
    "from": 31,
    "ct": 2,
    "images": 4,
    "structural": 4,
    "density": 3,
    "neurosurgery": 2,
    "systematic": 6,
    "review": 18,
    "ethical": 11,
    "principles": 2,
    "cannot": 2,
    "can": 8,
    "we": 4,
    "open": 8,
    "black": 3,
    "box": 3,
    "evaluation": 6,
    "an": 36,
    "breast": 2,
    "cancer": 13,
    "screening": 3,
    "pattern": 2,
    "survey": 10,
    "state": 4,
    "explainable": 15,
    "language": 38,
    "processing": 13,
    "adaptation": 2,
    "systems": 14,
    "analysis": 14,
    "applications": 14,
    "control": 7,
    "chatgpt": 15,
    "models": 11,
    "powered": 6,
    "drug": 9,
    "discovery": 10,
    "pathology": 3,
    "predicts": 2,
    "cancers": 2,
    "primary": 3,
    "evaluating": 5,
    "medical": 14,
    "information": 5,
    "efficient": 6,
    "light": 4,
    "emitting": 2,
    "big": 7,
    "data": 13,
    "analytics": 2,
    "inspired": 2,
    "computing": 5,
    "towards": 10,
    "accurate": 2,
    "detection": 5,
    "covid": 7,
    "19": 7,
    "cases": 2,
    "using": 20,
    "write": 3,
    "scholarly": 2,
    "advances": 3,
    "challenges": 13,
    "opportunities": 9,
    "impact": 3,
    "resources": 2,
    "matter": 4,
    "environmental": 4,
    "sustainability": 4,
    "role": 11,
    "on": 35,
    "sustainable": 5,
    "development": 9,
    "goals": 4,
    "digital": 5,
    "era": 7,
    "brief": 2,
    "introduction": 6,
    "interplay": 4,
    "between": 6,
    "neuroscience": 3,
    "research": 17,
    "highly": 3,
    "solar": 2,
    "s": 12,
    "plant": 3,
    "products": 2,
    "promising": 3,
    "robotics": 4,
    "b": 3,
    "is": 14,
    "receptor": 4,
    "endocytosis": 3,
    "what": 9,
    "c": 2,
    "iii": 2,
    "genes": 2,
    "studies": 6,
    "activity": 2,
    "structures": 3,
    "dynamic": 2,
    "optimal": 2,
    "energy": 5,
    "flow": 3,
    "integrated": 4,
    "power": 3,
    "mental": 2,
    "gelatin": 2,
    "toward": 4,
    "tissue": 2,
    "engineering": 4,
    "measure": 2,
    "all": 4,
    "understanding": 7,
    "why": 2,
    "than": 2,
    "think": 2,
    "within": 2,
    "computation": 2,
    "science": 6,
    "trends": 6,
    "effects": 8,
    "n": 2,
    "3": 2,
    "growth": 3,
    "immunity": 2,
    "expression": 3,
    "related": 5,
    "disease": 9,
    "resistance": 4,
    "large": 6,
    "following": 2,
    "collaboration": 2,
    "inference": 4,
    "dataset": 4,
    "resource": 2,
    "management": 6,
    "scientific": 4,
    "age": 2,
    "foundation": 3,
    "approaches": 3,
    "clinical": 11,
    "rice": 3,
    "history": 2,
    "associated": 2,
    "philosophical": 2,
    "approach": 6,
    "antioxidant": 2,
    "as": 9,
    "anti": 2,
    "xai": 3,
    "did": 2,
    "not": 2,
    "manuscript": 2,
    "or": 6,
    "it": 4,
    "text": 4,
    "into": 5,
    "generated": 4,
    "potential": 4,
    "generation": 8,
    "materials": 5,
    "modeling": 6,
    "trials": 3,
    "limits": 2,
    "intracellular": 2,
    "machine": 15,
    "learning": 28,
    "practical": 2,
    "implementation": 5,
    "technologies": 6,
    "synthesis": 7,
    "perspective": 6,
    "chatbot": 5,
    "education": 14,
    "responsible": 4,
    "use": 4,
    "evolution": 6,
    "study": 5,
    "collective": 2,
    "radiology": 2,
    "promise": 2,
    "generative": 11,
    "2": 6,
    "mediated": 6,
    "bacterial": 3,
    "cell": 12,
    "communication": 4,
    "beyond": 2,
    "long": 4,
    "origin": 2,
    "semantics": 2,
    "oncology": 3,
    "real": 4,
    "world": 3,
    "mediates": 2,
    "effect": 2,
    "acid": 2,
    "sensing": 5,
    "drosophila": 4,
    "design": 8,
    "multimodal": 2,
    "biomedical": 3,
    "methods": 2,
    "metrics": 2,
    "redox": 3,
    "batteries": 3,
    "sociotechnical": 2,
    "vivo": 3,
    "covalent": 2,
    "cross": 6,
    "intelligent": 4,
    "assistants": 2,
    "polymer": 2,
    "cells": 9,
    "employing": 2,
    "non": 4,
    "conjugated": 2,
    "small": 2,
    "pigs": 3,
    "identified": 2,
    "genome": 3,
    "sequencing": 2,
    "over": 2,
    "signal": 2,
    "reverse": 2,
    "t": 4,
    "acute": 2,
    "diagnosis": 9,
    "diseases": 3,
    "li": 2,
    "ion": 3,
    "metal": 2,
    "theory": 5,
    "computational": 4,
    "explanations": 2,
    "visualizing": 2,
    "lipid": 2,
    "gene": 6,
    "7": 2,
    "membrane": 2,
    "fluorescent": 3,
    "protein": 3,
    "pairs": 2,
    "imaging": 6,
    "dual": 2,
    "be": 3,
    "time": 4,
    "revolution": 3,
    "translation": 2,
    "allows": 2,
    "costs": 2,
    "pediatric": 2,
    "late": 2,
    "emerging": 2,
    "cgas": 2,
    "like": 5,
    "receptors": 2,
    "rna": 2,
    "32": 2,
    "signalling": 2,
    "esophageal": 2,
    "squamous": 2,
    "carcinoma": 4,
    "susceptibility": 2,
    "locus": 2,
    "at": 3,
    "case": 2,
    "healthcare": 11,
    "two": 2,
    "microbiota": 2,
    "regulating": 3,
    "revolutionizing": 3,
    "transformative": 2,
    "oxide": 2,
    "oxygen": 2,
    "application": 6,
    "statistical": 4,
    "experimental": 3,
    "removal": 2,
    "aqueous": 2,
    "solution": 3,
    "carbon": 3,
    "harnessing": 3,
    "tutoring": 3,
    "enhanced": 5,
    "classroom": 3,
    "outcomes": 2,
    "alzheimer": 3,
    "via": 6,
    "species": 3,
    "bridge": 2,
    "cognitive": 2,
    "new": 12,
    "how": 8,
    "will": 2,
    "practice": 2,
    "pathogenic": 2,
    "mechanisms": 2,
    "thiophene": 2,
    "versus": 2,
    "encapsulation": 2,
    "sulfur": 2,
    "lithium": 2,
    "algorithms": 4,
    "applied": 2,
    "chest": 2,
    "patient": 4,
    "populations": 2,
    "industry": 3,
    "battery": 2,
    "near": 3,
    "nanoparticles": 2,
    "memory": 4,
    "model": 6,
    "google": 2,
    "tasks": 2,
    "general": 3,
    "deficiency": 2,
    "promotes": 2,
    "inflammation": 2,
    "through": 5,
    "myeloid": 2,
    "luminescence": 2,
    "efficiency": 2,
    "photonics": 2,
    "solving": 2,
    "prostate": 2,
    "enabled": 6,
    "patients": 4,
    "predicting": 4,
    "mutant": 2,
    "driven": 7,
    "distinct": 2,
    "transcription": 2,
    "factor": 3,
    "cataracts": 3,
    "technology": 2,
    "literature": 3,
    "recognition": 2,
    "space": 2,
    "smart": 4,
    "quantum": 3,
    "logical": 2,
    "let": 2,
    "about": 4,
    "chatbots": 7,
    "heterogeneity": 2,
    "assistance": 2,
    "next": 4,
    "comprehensive": 4,
    "rheumatoid": 2,
    "arthritis": 2,
    "cardiovascular": 2,
    "generating": 2,
    "nlp": 3,
    "specific": 3,
    "dna": 4,
    "methylation": 2,
    "signatures": 2,
    "processes": 2,
    "progression": 2,
    "service": 5,
    "biases": 2,
    "improvement": 2,
    "developing": 3,
    "university": 2,
    "safety": 3,
    "fairness": 2,
    "privacy": 2,
    "professionals": 2,
    "genomic": 3,
    "chromatin": 2,
    "arabidopsis": 2,
    "assessing": 2,
    "chemistry": 3,
    "quality": 2,
    "centered": 3,
    "diagnostic": 3,
    "accuracy": 2,
    "conversational": 6,
    "agents": 3,
    "devices": 5,
    "are": 5,
    "limitations": 2,
    "fda": 3,
    "robots": 2,
    "virtual": 4,
    "identification": 5,
    "low": 2,
    "trial": 2,
    "organic": 4,
    "independent": 2,
    "nutrient": 2,
    "selection": 2,
    "brain": 3,
    "co": 3,
    "required": 2,
    "stem": 2,
    "migration": 2,
    "clinician": 2,
    "learns": 2,
    "strategies": 2,
    "sepsis": 2,
    "intensive": 2,
    "care": 3,
    "marketing": 4,
    "lipoprotein": 2,
    "changing": 2,
    "precision": 3,
    "platform": 2,
    "profiling": 2,
    "red": 3,
    "active": 2,
    "against": 3,
    "major": 2,
    "i": 2,
    "framework": 5,
    "customer": 3,
    "their": 2,
    "user": 3,
    "knowledge": 6,
    "representation": 2,
    "issues": 2,
    "molecular": 6,
    "prevention": 2,
    "reporting": 3,
    "interfaces": 3,
    "discourse": 2,
    "prediction": 2,
    "considerations": 3,
    "student": 3,
    "interaction": 3,
    "online": 4,
    "heuristics": 4,
    "printed": 2,
    "monitoring": 3,
    "lexical": 2,
    "simulation": 3,
    "photosynthetic": 2,
    "cmos": 2,
    "edge": 3,
    "comparative": 2,
    "asian": 2,
    "program": 2,
    "that": 2,
    "domain": 3,
    "academic": 2,
    "reality": 2,
    "written": 2,
    "legal": 2,
    "disorders": 2,
    "current": 3,
    "support": 5,
    "interventions": 2,
    "critical": 2,
    "tumorigenesis": 2,
    "random": 2,
    "regulatory": 3,
    "atherosclerosis": 4,
    "automation": 2,
    "augmented": 2,
    "integration": 2,
    "wave": 2,
    "2021": 2,
    "software": 2,
    "overview": 5,
    "structure": 4,
    "relationships": 2,
    "decision": 5,
    "quorum": 4,
    "containing": 2,
    "designing": 3,
    "novel": 5,
    "status": 2,
    "evidence": 3,
    "art": 2,
    "prospects": 2,
    "recommendation": 2,
    "contributes": 2,
    "de": 2,
    "novo": 2,
    "diabetic": 4,
    "foot": 2,
    "vitro": 2,
    "neurosymbolic": 2,
    "ecological": 2,
    "semantic": 3,
    "do": 4,
    "distributed": 3,
    "forecasting": 2,
    "things": 2,
    "dynamics": 2,
    "blockchain": 2,
    "assistant": 3,
    "perception": 2,
    "embodied": 2,
    "autonomous": 2,
    "retinopathy": 2,
    "implications": 4,
    "colorectal": 2,
    "writing": 3,
    "essay": 2,
    "graphene": 2,
    "responses": 2,
    "side": 2,
    "solutions": 2,
    "programming": 2,
    "explainability": 2,
    "trust": 4,
    "acceptance": 2,
    "directions": 3,
    "field": 2,
    "image": 4,
    "anode": 2,
    "perceptions": 2,
    "guide": 2,
    "signaling": 3,
    "pathways": 2,
    "short": 3,
    "ideal": 2,
    "way": 2,
    "view": 2,
    "injury": 2,
    "neuronal": 2,
    "injection": 3,
    "core": 2,
    "shell": 2,
    "therapy": 2,
    "ambiguity": 2,
    "assisted": 3,
    "liability": 2,
    "inside": 2,
    "taxonomy": 2,
    "cybersecurity": 2,
    "meat": 2,
    "eaters": 2,
    "fish": 2,
    "induced": 3,
    "teachers": 2,
    "15": 2,
    "meta": 2,
    "public": 2,
    "agenda": 3,
    "scoping": 3,
    "mind": 2,
    "reperfusion": 2,
    "stress": 3,
    "problems": 2,
    "foreign": 2,
    "interpretation": 2,
    "translational": 2,
    "making": 2,
    "ultrafiltration": 2
};

//stores every unique word and the coordinates of all titles containing that word
const word_and_coord = {};

//3 basic needs to display aanything in three js
let camera, scene, renderer;

//stores each title temporarily
let message;

//stores every title and its world position/coordinate/Vector3 value in the scene
const title_and_coord = {};

//CLOCK
const clock = new THREE.Clock();

//adding a scene
scene = new THREE.Scene();

//adding a camera
camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100000);
camera.position.set(0, -1933, 489221);



//loading manager has 4 methods to help with the loading of the page
//this instance can be passed to the any loader method to perform xyz actions 
const loadingManager = new THREE.LoadingManager();


//when loading of page takes place
//url of the file being loaded, item is index of loading object, total is total no of objects loaded
const progressBar = document.getElementById('progress-bar');
loadingManager.onProgress = function(url, loaded, total){
    progressBar.value = (loaded / total) * 100;
}



//select loading visualisation component
const progressBarContainer = document.querySelector('.progress-bar-container');

//About button and popup component
const aboutContainer = document.querySelector('.main-container-about');
aboutContainer.style.display = 'none'

//Info button
const infoContainer = document.querySelector('.infocontainer');
infoContainer.style.display = 'none'



//camera animation which zooms into the visualisation
let tween = new TWEEN.Tween(camera.position).to({ x: 0, y: -32.69, z: 7000}, 75000);
//stutter in camera
/*
Vector3 {x: 0, y: -32.69140000000061, z: 11207.907800000045}
visualisation.js:988 Polar angle of controls: 1.574747485761659
visualisation.js:987 Vector3 {x: 0, y: -25.845520001146497, z: 9485.861040288291}

1.52 LL
1.58 middle
1.62 UL
*/


//tween a movement smoothly between 2 states so that camera animation isnt instantaneous
//.Tween(xyz) is starting state
//this tween goes to this coord, next parameter is duration

//console.log('Camera pos: ' + camera.position)

//end of visualisation has roughly this coord postion:
//Vector3 {x: 0, y: 2.9956204125019437e-11 or -1933, z: 489221.9396788709}
//Vector3 {x: 0, y: -1768.6423885545769, z: 447623.8996228858}
//beginning coord is x=0, y: (-9 or -12), z: anywhere between 2100/3000 (<this is the absolute end) to 7000

//don't change anything below because it messes resizing
//not even spacing or formatting
renderer = new THREE.WebGLRenderer( {antialias: true} );
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);
const controls = new OrbitControls(camera, renderer.domElement);


//when page has loaded
loadingManager.onLoad = function() {
    //console.log('fini: ' + clock.getElapsedTime());
    progressBarContainer.style.display = 'none';
    //descrip.style.display = 'none'
    controls.enabled = false;

    tween.start();

    tween.onComplete(function() {
        
        aboutContainer.style.display = 'flex';
        infoContainer.style.display = 'flex'
        controls.enabled = true;

      });
}
controls.update();

controls.addEventListener('change', animate);
window.addEventListener('resize', onWindowResize);
//top angle is 0 rad and bottom angle along y axis is 3.14
//2.03 (downwards) - 0.63 (upwards) is the suitable limit for vertical camera rotation (in radians using getpolarangle)
// if (camera.position == {x: -264.18275843082796, y: -5826.587829532871, z: 9971.40308120192}){
//     controls.minPolarAngle = Math.PI/2.4;
// 	   controls.maxPolarAngle =  Math.PI/1.5;
// }

// if ( -1083.587829532871 > camera.position.y > 1722){
//     controls.minPolarAngle = Math.PI/2;
// 	   controls.maxPolarAngle =  Math.PI/1.9;
// }
controls.minPolarAngle = Math.PI/2.1; //1.5
controls.maxPolarAngle =  Math.PI/2; //1.57
//plusOrMinus2 * (300 + ((Math.random()*100)) + (Math.random()*1000));
//850 - 300/2 = 275

// if (camera.position.z > 5332){
//     controls.minPolarAngle = Math.PI/2.1;//1.5
// 	controls.maxPolarAngle =  Math.PI/2;//1.57
// }

//AUDIO SECTIONS
const listener = new THREE.AudioListener();
camera.add( listener );

// create a global audio source
const sound = new THREE.Audio( listener );

// load a sound and set it as the Audio object's buffer
const audioLoader = new THREE.AudioLoader();
audioLoader.load( 'assets/EtherealAmbientAtmosphere.mp3', function( buffer ) {
	sound.setBuffer( buffer );
	sound.setLoop( true );
	sound.setVolume( 0.5 );
	sound.play();
});



const light = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add( light );

//scene.background = new THREE.Color(0xFFD2A3);
// let cloudParticles = [];
// let cloudGeo;
// let cloudMaterial;
// let bg_loader = new THREE.TextureLoader();
// bg_loader.load("lightsmoke.jpeg", function(texture){
//     cloudGeo = new THREE.PlaneGeometry(500,500);
//     cloudMaterial = new THREE.MeshLambertMaterial({
//       map:texture,
//       transparent: true
//     });
//     for(let p=0; p<50; p++) {
//       let cloud = new THREE.Mesh(cloudGeo, cloudMaterial);
//       cloud.position.set(
//         Math.random()*800 -400,
//         500,
//         Math.random()*500-500
//       );
//       cloud.rotation.x = 1.16;
//       cloud.rotation.y = -0.12;
//       cloud.rotation.z = Math.random()*2*Math.PI;
//       cloud.material.opacity = 0.55;
//       cloudParticles.push(cloud);
//       scene.add(cloud);
//     }
//   });
//scene.fog = new THREE.FogExp2( 0xDDD7C4, 0.0004 );


//creates invisible path for the future 3d model of baby to move/crawl on
let curve = null;


//creating a font and using it as the geometry
const loader = new FontLoader(loadingManager);
loader.load('assets/montserrat/Montserrat_Regular.json', function (font){

    const matLite = new THREE.MeshBasicMaterial({
        color: text_color,
        opacity: 1.0,
        side: THREE.DoubleSide
    });

    for (let i = 0; i < sentences.length; i++) {
        
        var title_coord = new THREE.Vector3();
        message = sentences[i];

        const shapes = font.generateShapes(message, 100);
        const geometry = new THREE.ShapeGeometry(shapes);

        //generate a 1 or -1
        var plusOrMinus = Math.random() < 0.5 ? -1 : 1;
        var plusOrMinus2 = Math.round(Math.random()) * 2 - 1;
        
        var title = new THREE.Mesh(geometry, matLite);
            title.position.x = i*90*plusOrMinus*Math.random();


            title.position.y = plusOrMinus2 * (300 + ((Math.random()*100)) + (Math.random()*1000));

            //z is very spread out for this combination of values
            title.position.z = ( 700 + ((Math.random()*100) + 1) + (i*Math.random()*1000) );
            //plusOrMinus * ( 900 + ((Math.random()*10) + 0) + (Math.random()*100) + (Math.random()*1000) );

            //title.position.z = plusOrMinus2 * (900 + ((Math.random()*10) + 0) + (Math.random()*100) + (Math.random()*1000));

            //title.position.y = plusOrMinus2 * ( 900 + ((Math.random()*10) + 0) + (Math.random()*100) + (Math.random()*1000) );

            //title.rotateY(Math.random() * 1.1 * 3.14 * plusOrMinus2);
            title.scale.setScalar(0.5)
            
            scene.add(title);
            title_and_coord[message] = title.getWorldPosition(title_coord);
            
            //printing each title's coord
            //console.log(title.getWorldPosition(title_coord));

    //title loop ends here
    }
    
    /*
    Rendering lines across titles with shared words
    
    PSEUDOCODE:
    - Loop through each unique word in uniq_words dictionary (604 at present)
        - Loop through all the titles (508 at present)
            - if the word appears in the title
                - Make a new dict/add to a dict 
                where the key is the word and value is the world coordinates of the title
                for example:
                    {
                    "ai" : [ {242.34, 234.989, 8756.21}, {}, ...],
                    "its" : [ {922.34, 834.989, 3177.21}, Vector3, Vector3, ....],
                    .....
                    }
        Once dict is complete, loop through it and draw lines intersecting at all those coordinates
    */
    
    for (let word in uniq_words) {
        var shared_coords = [];
        
        //console.log(title_and_coord)
        Object.keys(title_and_coord).forEach(key => {
            //console.log(title_and_coord[key]);

            const lwrcase = key.toLowerCase();
            if (lwrcase.includes(word)){

                //append the coord of title to list/array initialized before the loop
                shared_coords.push(title_and_coord[key]);
            }
        });
        word_and_coord[word] = shared_coords;
        
    }
    //console.log(word_and_coord);

    
    //setting up the main associations/mappings/lines 
    const material = new THREE.LineDashedMaterial({
        color: line_color, 
        dashSize: 20, 
        gapSize: 7.5,
        lineWidth: 0.1
    }); 

    //loop through every word and its matching coordinates
    for (const [key, value] of Object.entries(word_and_coord)) {
        //console.dir(`Key: ${key}, Value: ${value}`);

        //.setFromPoints(x) needs x to be a list/array of Vec3 values
        //value of word_and_coord obj is already an array of Vec3 values
        const geometry = new THREE.BufferGeometry().setFromPoints(value);
        const line = new THREE.Line( geometry, material );
        //to have dashes on a line you have to call .computeLineDistance() on your geometry
        line.computeLineDistances();
        scene.add(line);


    }
    //console.log(word_and_coord);
});

//variables for tracking time; will be used to move baby along a path
let mixer = null;
let elapsedTime = 0;  // To keep track of time
const pathDuration = 10000;  // Duration in seconds for one complete loop
let baby = null;


//DRACO
const loader_draco = new DRACOLoader();
// Specify path to a folder containing WASM/JS decoding libraries.
loader_draco.setDecoderPath( 'draco/' );

// async function loadbabies() {
//     const baby_loader = new GLTFLoader().setPath('baby_1motions/');
//     const [...allmodels] = await Promise.all([baby_loader.loadAsync('scene.gltf'), baby_loader.loadAsync('scene.gltf')]);
  
//     const bb1 = allmodels[0].scene;
//     const bbys = [allmodels[0].scene, allmodels[0].scene.clone(), allmodels[0].scene.clone(), allmodels[0].scene.clone()];
  
//     bbys[0].position.set(10, 0, 1600);
//     bbys[1].position.set(40, 0, 1600);
//     bbys[2].position.set(80, 0, 1600);
//     bbys[3].position.set(100, 0, 1600);
  
//     scene.add(bb1.scene);
//     scene.add(bbys.scene);
// };
// await loadbabies();

//3d baby model
const loader_3d = new GLTFLoader();
loader_3d.setDRACOLoader(loader_draco);
loader_3d.load('compressed_glb.glb', (gltf) => {
    baby = gltf.scene;

    //baby.position.set(0, 1.05, 1500);
    
    scene.add(baby);

    var light = new THREE.AmbientLight(0xffffff);
    scene.add(light);

    //console.log(gltf.animations);
    mixer = new THREE.AnimationMixer(baby);

    const action = mixer.clipAction(gltf.animations[0]);
    action.play();


    // for(let i=0;i<10;i++){
    //     let babyClone = SkeletonUtils.clone(baby);  
    //     scene.add(babyClone);
    //     babyArray.push( babyClone );
    //     // console.log(babyArray);
    //     var bb_light = new THREE.AmbientLight(0xffffff);
    //     scene.add(bb_light);
    //     const action = mixer.clipAction(gltf.animations[0],babyClone);
    //     action.play();
    // }
});


//render the entire scene
function animate() {

    //console.log(camera.position);
    //console.log('Polar angle of controls: ' + controls.getPolarAngle());
    //console.log(progressBar.value);
    const delta = clock.getDelta();
    elapsedTime += delta;

    if(mixer){
        mixer.update(delta);
    }

    if (baby) {
        const t = (elapsedTime % pathDuration) / pathDuration;  // Normalize to [0, 1]
        curve = new THREE.CatmullRomCurve3(word_and_coord["ai"], true);
        const position = curve.getPoint(t);
        baby.position.copy(position);
    }

    TWEEN.update();
    
    renderer.render( scene, camera );

}

renderer.setAnimationLoop(animate);



function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    animate();
}




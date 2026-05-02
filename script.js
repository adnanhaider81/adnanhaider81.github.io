const posts = [
  {
    title: "Turning a manuscript into a reproducible genomics repository",
    slug: "manuscript-to-reproducible-genomics-repository",
    category: "Reproducibility",
    date: "2026-05-01",
    minutes: 13,
    tags: ["GitHub", "Snakemake", "Reproducibility"],
    summary:
      "A methods-focused article on converting outbreak manuscripts into public repositories that preserve analysis logic, assumptions, quality checks, and reusable commands.",
    body: [
      {
        heading: "A repository is part of the method",
        paragraphs: [
          "In pathogen genomics, the manuscript usually contains the scientific argument, but the repository contains the evidence path. A reader should be able to move from the biological question to the computational workflow without guessing which reference was used, which samples were excluded, which threshold created a masked base, or which command generated the final tree.",
          "For outbreak work this matters because the same analysis may later be reused for a new pathogen, a new sequencing batch, or a training session. A clean repository is not decoration. It is a way of showing that the analysis was thought through, that important choices were recorded, and that another analyst could audit the logic."
        ]
      },
      {
        heading: "What I include before I call a repository ready",
        paragraphs: [
          "My preferred structure starts with a short scientific purpose statement. The README should say what the workflow answers, what data type it expects, what outputs it produces, and what it does not claim to solve. A repository that says only how to run commands is incomplete; it must also explain why those commands exist.",
          "The second layer is reproducibility: environment files, workflow rules, configuration templates, sample sheets, expected output paths, and citations. Snakemake is useful here because it expresses dependencies between files, commands, environments, and outputs. A dry run can show the analysis plan before compute time is spent."
        ],
        points: [
          "README: scientific purpose, data type, input layout, main outputs, and known limitations.",
          "Environment: conda or mamba file with pinned packages wherever possible.",
          "Config: editable sample sheet and parameters separated from workflow code.",
          "Workflow: one command for dry run and one command for full execution.",
          "Outputs: a short guide to consensus FASTA, QC tables, mutation tables, trees, and reports."
        ]
      },
      {
        heading: "Restricted data should not block transparency",
        paragraphs: [
          "Many clinical and public-health datasets cannot be made fully public. That should not stop a repository from being useful. The solution is to separate private inputs from public logic: keep raw FASTQ paths out of the repository, provide example metadata with fake sample IDs, include small test files when allowed, and document how the real data were arranged.",
          "For collaborators and future trainees, this communicates two things at once: the analysis is traceable, and data governance was taken seriously. In applied genomics, those two values should sit together."
        ]
      },
      {
        heading: "A minimal command pattern",
        commands: [
          "git clone https://github.com/adnanhaider81/example-pathogen-workflow.git",
          "cd example-pathogen-workflow",
          "mamba env create -f env/environment.yml",
          "conda activate pathogen-workflow",
          "snakemake -s workflow/Snakefile --configfile config/config.yaml -n -c 4",
          "snakemake -s workflow/Snakefile --configfile config/config.yaml -c 4 --printshellcmds"
        ]
      }
    ],
    references: [
      {
        title: "Sustainable data analysis with Snakemake",
        url: "https://pubmed.ncbi.nlm.nih.gov/34035898/"
      },
      {
        title: "Snakemake: a scalable bioinformatics workflow engine",
        url: "https://academic.oup.com/bioinformatics/article-abstract/28/19/2520/290322"
      }
    ]
  },
  {
    title: "Culture-free nanopore sequencing for poliovirus environmental surveillance",
    slug: "culture-free-nanopore-polio-surveillance",
    category: "Work Notes",
    date: "2026-04-18",
    minutes: 12,
    tags: ["Poliovirus", "Nanopore", "Wastewater"],
    summary:
      "A practical article on where direct sequencing can support poliovirus environmental surveillance, what it can speed up, and where cautious interpretation is still necessary.",
    body: [
      {
        heading: "The surveillance question comes first",
        paragraphs: [
          "Wastewater and environmental surveillance are powerful because they watch populations rather than only individuals who reach clinical testing. For poliovirus, this can reveal circulation that might otherwise remain silent. The analytical challenge is that environmental samples are mixed, degraded, inhibited, and often low in target material.",
          "Culture-free nanopore sequencing is attractive because it can shorten the path from sample to genomic signal. The goal is not to pretend that sequencing replaces every classical virology step. The goal is to ask where sequencing can add earlier evidence: confirming target signal, prioritizing samples, identifying sequence features, and deciding what needs deeper laboratory follow-up."
        ]
      },
      {
        heading: "A field-aware workflow",
        paragraphs: [
          "The workflow I would document begins with intake metadata: site, collection date, concentration method, extraction lot, RT-PCR result, Ct value when available, and storage history. Without those details, sequencing results become detached from sample quality and epidemiological context.",
          "The laboratory path can then move through extraction review, RT-PCR confirmation, amplicon or targeted enrichment, ONT library preparation, run monitoring, basecalling, read filtering, reference mapping, consensus review, and report writing. For every step, the runbook should say what failure looks like. Low yield, short read distribution, primer imbalance, or a sudden rise in negative-control reads are not small details; they change confidence."
        ]
      },
      {
        heading: "What the report should separate",
        points: [
          "Confirmed laboratory evidence: PCR positivity, sequencing yield, target-specific read support, and controls.",
          "Genomic evidence: breadth of coverage, depth distribution, consensus ambiguity, and informative regions recovered.",
          "Interpretation: whether the result supports immediate follow-up, repeat testing, or cautious monitoring.",
          "Limitations: inhibition, dilution, primer bias, mixed populations, and environmental degradation."
        ]
      },
      {
        heading: "Why nanopore belongs in the discussion",
        paragraphs: [
          "Nanopore sequencing brings portability and speed, which can be important when decisions are time-sensitive. It also makes run monitoring visible: an analyst can watch read accumulation and decide whether the run is producing useful evidence. That flexibility is valuable in surveillance settings where sample quality varies.",
          "The tradeoff is that speed does not remove the need for controls, thresholds, and careful language. A strong direct-sequencing report should make confidence transparent rather than simply presenting a consensus sequence."
        ]
      }
    ],
    references: [
      {
        title: "WHO: Wastewater and environmental surveillance summary for poliovirus",
        url: "https://www.who.int/publications/m/item/wastewater-and-environmental-surveillance--summary-for-poliovirus"
      },
      {
        title: "ARTIC Network SARS-CoV-2 sequencing resources",
        url: "https://artic.network/viruses/sars-cov-2"
      },
      {
        title: "CDC: Wastewater surveillance and public health",
        url: "https://www.cdc.gov/advanced-molecular-detection/php/success-stories/wastewater-surveillance.html"
      }
    ]
  },
  {
    title: "Host subtraction and competitive mapping: avoiding overconfident metagenomic calls",
    slug: "host-subtraction-competitive-mapping",
    category: "Methods",
    date: "2026-04-04",
    minutes: 14,
    tags: ["Metagenomics", "Host subtraction", "Mapping"],
    summary:
      "A deeper note on conservative metagenomic interpretation: why read counts alone are not enough, and how host subtraction, database design, and competitive mapping reduce false confidence.",
    body: [
      {
        heading: "The strongest-looking hit is not always the right answer",
        paragraphs: [
          "Metagenomic sequencing is powerful because it does not require a single target hypothesis before sequencing. That strength also creates interpretive risk. Low-complexity sequence, conserved regions, barcode bleed, index hopping, reagent contaminants, incomplete databases, and close relatives can all produce results that look more certain than they are.",
          "A responsible pathogen-discovery workflow should therefore behave more like an evidence filter than a name generator. The first question is not simply which organism got reads. The better question is whether the reads support that organism better than plausible alternatives."
        ]
      },
      {
        heading: "Host subtraction is necessary but not sufficient",
        paragraphs: [
          "Host subtraction reduces background by removing reads that align to human or other expected host genomes. This can improve sensitivity for microbial reads and reduce downstream compute. However, subtracting host reads does not solve database ambiguity. A read that survives host subtraction can still map to a conserved gene shared by multiple organisms.",
          "Competitive mapping is useful after broad classification. Instead of accepting a single top hit, it maps reads against a curated panel of close candidates and asks whether breadth, depth, mapping quality, and genomic distribution support a specific call. This is especially important for high-consequence organisms and mixed samples."
        ]
      },
      {
        heading: "Evidence rules I would report",
        points: [
          "Breadth of coverage across the genome, not only total read count.",
          "Read distribution across independent regions rather than a single deep island.",
          "Mapping quality and mismatch profile against close relatives.",
          "Negative-control and batch context, especially for low-biomass samples.",
          "Confirmation plan: PCR, targeted sequencing, culture, serology, or repeat extraction depending on the organism."
        ]
      },
      {
        heading: "How to write the conclusion",
        paragraphs: [
          "The conclusion should use evidence language. Strong support, partial support, and investigation-only signal are different categories. A report that clearly labels uncertainty is more scientific than one that hides ambiguity behind a confident organism name.",
          "In public-health genomics, that discipline protects decision-making. It helps a response team decide whether to act, repeat, sequence deeper, or treat the signal as a lead requiring independent confirmation."
        ]
      }
    ],
    references: [
      {
        title: "Clinical metagenomic next-generation sequencing for pathogen detection",
        url: "https://www.annualreviews.org/content/journals/10.1146/annurev-pathmechdis-012418-012751"
      },
      {
        title: "Role of metagenomics and next-generation sequencing in infectious disease diagnosis",
        url: "https://academic.oup.com/clinchem/article/68/1/115/6490230"
      },
      {
        title: "Improved metagenomic analysis with Kraken 2",
        url: "https://genomebiology.biomedcentral.com/articles/10.1186/s13059-019-1891-0"
      }
    ]
  },
  {
    title: "From FASTQ to public-health report: a compact viral genomics workflow",
    slug: "fastq-to-public-health-report",
    category: "Tutorials",
    date: "2026-03-26",
    minutes: 13,
    tags: ["FASTQ", "QC", "Reporting"],
    summary:
      "A tutorial-style guide for turning raw reads into consensus genomes, lineage calls, mutation summaries, phylogeny, and a report that non-bioinformaticians can use.",
    body: [
      {
        heading: "A workflow should preserve decisions",
        paragraphs: [
          "Raw sequencing reads do not become public-health evidence automatically. Between FASTQ and report, the analyst makes decisions about read quality, trimming, host screening, mapping, assembly, variant calling, consensus masking, lineage assignment, and visualization. A good workflow records those decisions as outputs.",
          "For viral surveillance, I prefer a design where each step produces both a file for downstream analysis and a small quality artifact for review. That means the analyst can explain why a sample passed, why a sample failed, and which parts of the genome should be trusted."
        ]
      },
      {
        heading: "Core checkpoints",
        points: [
          "Read QC: raw read counts, quality distribution, adapter content, and per-sample yield.",
          "Trimming: adapter and primer handling, minimum length, and quality thresholds.",
          "Mapping or assembly: reference choice, percent mapped, breadth, depth, and off-target reads.",
          "Consensus: masking threshold, ambiguous bases, low-coverage regions, and final FASTA naming.",
          "Interpretation: lineage, clade, mutation table, phylogenetic placement, and limitations."
        ]
      },
      {
        heading: "A minimal command pattern",
        commands: [
          "fastqc sample_R1.fastq.gz sample_R2.fastq.gz",
          "trimmomatic PE sample_R1.fastq.gz sample_R2.fastq.gz R1.trim.fq.gz R1.unpaired.fq.gz R2.trim.fq.gz R2.unpaired.fq.gz ILLUMINACLIP:adapters.fa:2:30:10 SLIDINGWINDOW:4:20 MINLEN:50",
          "bwa mem -t 4 reference.fasta R1.trim.fq.gz R2.trim.fq.gz | samtools sort -o sample.sorted.bam",
          "samtools depth -a sample.sorted.bam > sample.depth.txt",
          "bcftools mpileup -f reference.fasta sample.sorted.bam | bcftools call -mv -Oz -o sample.vcf.gz",
          "nextclade run --input-dataset dataset sample.consensus.fasta --output-all nextclade/"
        ]
      },
      {
        heading: "The report is a translation layer",
        paragraphs: [
          "A report should not dump every file into a PDF. It should translate the analysis into decisions: whether the sample has enough genome recovery, whether the lineage or genotype call is reliable, whether mutations require follow-up, and whether the result belongs in a public dashboard, manuscript, or internal memo.",
          "I like reports that include one compact table, one coverage figure, one tree or lineage summary when appropriate, and a short paragraph that states confidence and caveats. The analyst should be able to defend every sentence from the underlying files."
        ]
      }
    ],
    references: [
      {
        title: "ARTIC Network: pathogen genomics from sample to response",
        url: "https://artic.network/viruses/sars-cov-2"
      },
      {
        title: "Nextclade documentation",
        url: "https://docs.nextstrain.org/projects/nextclade/en/stable/index.html"
      },
      {
        title: "Pangolin SARS-CoV-2 lineage assignment software",
        url: "https://github.com/cov-lineages/pangolin"
      }
    ]
  },
  {
    title: "Depth masking is not a technical detail",
    slug: "depth-masking-consensus-genomes",
    category: "Methods",
    date: "2026-03-08",
    minutes: 11,
    tags: ["Consensus", "Coverage", "bcftools"],
    summary:
      "Why low-depth positions, primer dropouts, and ambiguous bases should be handled visibly when producing consensus genomes for surveillance and phylogeny.",
    body: [
      {
        heading: "A consensus genome is an interpretation",
        paragraphs: [
          "A consensus FASTA looks simple, but it carries many decisions. Which reads were used? Were primers trimmed? What depth was required for a base? Were low-quality variants filtered? Were low-coverage positions masked as N? These choices shape downstream phylogeny, lineage calls, and mutation tables.",
          "If low-depth sites are not masked, a consensus can look cleaner than the evidence supports. That can create false precision in trees and misleading mutation summaries. In outbreak work, where people may compare samples by a small number of differences, this matters."
        ]
      },
      {
        heading: "Masking protects interpretation",
        paragraphs: [
          "Masking is sometimes treated like a technical nuisance, but it is actually a statement of honesty. It tells the reader that the workflow refuses to call a base without enough evidence. The exact threshold depends on pathogen, platform, amplicon design, expected diversity, and reporting use case.",
          "For short-read viral pipelines, I often start with a minimum depth threshold and then inspect breadth, ambiguous base percentage, and dropout patterns. For amplicon workflows, primer failure can create structured missingness, so a simple average depth is not enough."
        ]
      },
      {
        heading: "What I would publish with each consensus",
        points: [
          "Median depth and breadth of coverage at the selected depth threshold.",
          "Percent Ns or ambiguous bases in the final consensus.",
          "Primer scheme, trimming method, and reference accession.",
          "Variant-calling filters and masking threshold.",
          "QC status: pass, review, fail, or limited-use sequence."
        ]
      },
      {
        heading: "Why this improves communication",
        paragraphs: [
          "When a report states the masking logic, the downstream discussion becomes more scientific. A weak sequence can still be useful for partial evidence, but it should not be overinterpreted as a complete genome. A strong sequence can be used more confidently in lineage assignment and phylogenetic context.",
          "This is the kind of small methods discipline that improves a whole surveillance system. It makes results easier to compare across batches, laboratories, and time."
        ]
      }
    ],
    references: [
      {
        title: "Addressing systematic errors in SARS-CoV-2 phylogeny",
        url: "https://www.nature.com/articles/s41592-025-02947-1"
      },
      {
        title: "Nextclade: clade assignment, mutation calling and quality control",
        url: "https://joss.theoj.org/papers/10.21105/joss.03773"
      },
      {
        title: "Oxford Nanopore wf-artic documentation",
        url: "https://epi2me.nanoporetech.com/epi2me-docs/workflows/wf-artic/"
      }
    ]
  },
  {
    title: "Designing amplicon panels when reference diversity is uneven",
    slug: "amplicon-panels-reference-diversity",
    category: "Methods",
    date: "2026-02-11",
    minutes: 12,
    tags: ["Amplicons", "CCHFV", "Primer Design"],
    summary:
      "A methods reflection on primer design, reference bias, geographic sampling gaps, and validation choices for targeted viral sequencing.",
    body: [
      {
        heading: "Primer design is also a sampling problem",
        paragraphs: [
          "Amplicon design is often presented as a sequence-optimization problem: choose conserved regions, avoid poor melting temperatures, check specificity, and balance amplicon sizes. Those are necessary steps, but they do not solve the biggest field problem: reference diversity is rarely evenly sampled.",
          "If available genomes come mostly from one region, one outbreak, or one time period, a panel can look excellent in silico and still miss diversity in underrepresented settings. This is especially important for segmented or highly diverse viruses, where each segment or genomic region may have a different evolutionary history."
        ]
      },
      {
        heading: "A practical design approach",
        points: [
          "Build a reference set with dates, locations, host/source, and segment labels where relevant.",
          "Align references and inspect mismatch density by primer-binding region.",
          "Check whether mismatches cluster in lineages relevant to local surveillance.",
          "Avoid relying only on a single global consensus sequence.",
          "Plan failure interpretation: a dropout should tell you something, not simply break the run."
        ]
      },
      {
        heading: "Validation must match field conditions",
        paragraphs: [
          "Clean controls are useful, but they are not enough. Field validation should include low-input material, degraded RNA, mixed backgrounds, realistic extraction controls, and samples with different Ct values or target abundance. The goal is not only high coverage on ideal material. The goal is predictable behavior when the sample is difficult.",
          "I also prefer validation reports that show coverage by amplicon rather than only total reads. Amplicon imbalance can hide inside a high-yield run, and primer dropouts can affect exactly the regions needed for genotype or lineage interpretation."
        ]
      },
      {
        heading: "What to document",
        paragraphs: [
          "A panel should ship with primer coordinates, reference accession, amplicon sizes, expected overlap, known weak regions, and the bioinformatics assumptions needed to trim primers and mask low-depth sites. The laboratory method and computational method are connected. If the bioinformatics pipeline does not know the primer scheme, it cannot interpret the data properly."
        ]
      }
    ],
    references: [
      {
        title: "ARTIC primer scheme specification",
        url: "https://artic-network.github.io/primerscheme-specs/pdf/primerscheme.pdf"
      },
      {
        title: "Nanopore sequencing of SARS-CoV-2 amplicon protocols",
        url: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0259277"
      },
      {
        title: "ARTIC Network sequencing resources",
        url: "https://artic.network/viruses/sars-cov-2"
      }
    ]
  },
  {
    title: "Making Nextstrain useful for routine outbreak communication",
    slug: "nextstrain-routine-outbreak-communication",
    category: "Tutorials",
    date: "2026-01-08",
    minutes: 11,
    tags: ["Nextstrain", "Phylogenetics", "Dashboards"],
    summary:
      "How to turn phylogenetic builds into focused communication products with disciplined metadata, clear questions, and careful interpretation.",
    body: [
      {
        heading: "The tree is not the message",
        paragraphs: [
          "Phylogenetic dashboards are powerful because they make pathogen evolution visible. They can show clustering, lineage movement, sampling gaps, and time structure. But a tree is only useful when it answers a question. Without a question, it becomes a complex figure that invites overinterpretation.",
          "For routine outbreak communication, I start by writing the questions before building the visualization: Which lineages are circulating? Are recent samples clustering with local or imported context? Is there evidence of sustained transmission? Which samples require epidemiological follow-up?"
        ]
      },
      {
        heading: "Metadata discipline",
        paragraphs: [
          "Nextstrain-style builds depend on metadata quality. Dates should be consistent, locations should use stable names, and restricted fields should be separated from public-display fields. Missing metadata is not just empty space; it affects interpretation of geographic and temporal patterns.",
          "Subsampling also matters. A tree can look different depending on which contextual genomes are included. I prefer to document the contextual sampling rule so readers know whether the tree is intended for local comparison, national overview, or global placement."
        ],
        points: [
          "Use consistent sample dates and location levels.",
          "Keep private metadata out of public builds.",
          "Document contextual sequence selection.",
          "Write an interpretation note beside the tree.",
          "Avoid implying transmission from tree proximity alone."
        ]
      },
      {
        heading: "What a good dashboard should do",
        paragraphs: [
          "A good dashboard helps a reader decide what to ask next. It should connect phylogeny to sampling time, geography, lineage, and relevant mutations without overwhelming the user. It should also make uncertainty visible: low coverage, missing dates, sparse context, and uneven sampling can all shape the story.",
          "The best public-health phylogenetics outputs are not the most visually crowded ones. They are the ones that help teams act carefully."
        ]
      }
    ],
    references: [
      {
        title: "Nextstrain: real-time tracking of pathogen evolution",
        url: "https://next.nextstrain.org/"
      },
      {
        title: "Nextstrain automates real-time phylodynamic analysis",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13041781/"
      }
    ]
  },
  {
    title: "What wastewater genomics can and cannot tell public-health teams",
    slug: "wastewater-genomics-limits",
    category: "Field Issues",
    date: "2025-12-21",
    minutes: 12,
    tags: ["Wastewater", "Public health", "Interpretation"],
    summary:
      "A practical explainer on early warning, sampling design, inhibition, dilution, genomic resolution, and responsible public-health interpretation.",
    body: [
      {
        heading: "Wastewater is a population signal",
        paragraphs: [
          "Wastewater surveillance is valuable because it can detect pathogen signals from a community even when clinical testing is incomplete. It can work as an early warning system, a trend monitor, and a way to prioritize targeted follow-up. It is especially useful when clinical surveillance is delayed, uneven, or biased by care-seeking behavior.",
          "But wastewater is not a direct list of infected people. It combines shedding biology, catchment structure, sewer flow, rainfall, industrial inputs, sampling time, concentration efficiency, extraction success, inhibition, and assay sensitivity. Every interpretation should respect that mixture."
        ]
      },
      {
        heading: "Where genomics adds value",
        paragraphs: [
          "Sequencing can add information that qPCR alone cannot provide: genotype, lineage, mutation patterns, recombinant signals, and co-circulating variants. For poliovirus and respiratory viruses, this can help teams decide whether a signal needs targeted investigation or broader monitoring.",
          "The challenge is that mixed wastewater samples rarely behave like clean clinical isolates. Low-frequency variants, incomplete genomes, uneven coverage, and primer bias can make lineage reconstruction difficult. The report should state whether the data support a lineage call, a partial signal, or only target detection."
        ]
      },
      {
        heading: "Interpretation rules I trust",
        points: [
          "Trend direction is often more reliable than one isolated measurement.",
          "Catchment size and sampling design should be stated before interpreting public-health meaning.",
          "Genomic calls should include coverage and ambiguity metrics.",
          "Unexpected detections should trigger repeat testing and control review.",
          "Reports should separate detection, quantification, sequencing, and action recommendations."
        ]
      },
      {
        heading: "A careful report is more useful",
        paragraphs: [
          "Public-health teams do not need exaggerated certainty. They need usable evidence. A careful wastewater genomics report should say what was detected, how strong the signal was, what genomic evidence was recovered, what limitations apply, and what follow-up is reasonable.",
          "That kind of writing builds trust. It makes genomic surveillance useful without pretending it is magic."
        ]
      }
    ],
    references: [
      {
        title: "CDC: Public health interpretation of wastewater surveillance data",
        url: "https://archive.cdc.gov/www_cdc_gov/nwss/interpretation.html"
      },
      {
        title: "CDC: Wastewater surveillance as a public-health tool",
        url: "https://www.cdc.gov/advanced-molecular-detection/php/success-stories/wastewater-surveillance.html"
      },
      {
        title: "WHO: Wastewater and environmental surveillance for poliovirus",
        url: "https://www.who.int/publications/m/item/wastewater-and-environmental-surveillance--summary-for-poliovirus"
      }
    ]
  },
  {
    title: "What I look for in a surveillance pipeline runbook",
    slug: "surveillance-pipeline-runbook",
    category: "Work Notes",
    date: "2025-12-15",
    minutes: 10,
    tags: ["Runbooks", "SOPs", "Reproducibility"],
    summary:
      "A practical checklist for writing runbooks that help laboratory and bioinformatics teams run surveillance workflows consistently.",
    body: [
      {
        heading: "A runbook is for the difficult day",
        paragraphs: [
          "A pipeline runbook is most valuable when the run does not go perfectly. Anyone can follow a few commands on a clean dataset. The real test is whether the document helps an analyst respond to missing FASTQs, failed controls, low coverage, database path errors, unexpected lineages, or a sample that passes one metric and fails another.",
          "For surveillance teams, the runbook should reduce hesitation. It should tell the analyst what to check, what to rerun, when to stop, and when to escalate."
        ]
      },
      {
        heading: "The minimum useful structure",
        points: [
          "Purpose: the pathogen, sample type, sequencing platform, and scientific question.",
          "Inputs: file naming rules, metadata columns, references, databases, and config fields.",
          "Commands: environment creation, dry run, full run, report generation, and cleanup.",
          "Outputs: where to find consensus files, QC tables, trees, mutation reports, and logs.",
          "Decision rules: pass, review, fail, rerun, and limited-use categories."
        ]
      },
      {
        heading: "Make judgment visible",
        paragraphs: [
          "Some decisions cannot be fully automated. A borderline Ct value, a partial genome, a contaminated negative control, or conflicting lineage results may require human judgment. The runbook should not hide those points. It should name them clearly and give the analyst a defensible path.",
          "This is also useful for training. New analysts learn not only which commands to run, but why those commands matter and how evidence is weighed."
        ]
      },
      {
        heading: "A good runbook leaves an audit trail",
        paragraphs: [
          "I like runbooks that instruct users to save software versions, command logs, configuration files, MultiQC reports, and final interpretation notes. When a result is later used in a manuscript, partner report, or dashboard, those artifacts make the analysis traceable."
        ]
      }
    ],
    references: [
      {
        title: "Sustainable data analysis with Snakemake",
        url: "https://pubmed.ncbi.nlm.nih.gov/34035898/"
      },
      {
        title: "Snakemake workflow engine",
        url: "https://academic.oup.com/bioinformatics/article-abstract/28/19/2520/290322"
      }
    ]
  },
  {
    title: "How I read a genomic surveillance repository",
    slug: "how-i-read-genomic-surveillance-repository",
    category: "Career",
    date: "2025-11-22",
    minutes: 10,
    tags: ["Blog", "Writing", "Research Identity"],
    summary:
      "A reflective article on how a public repository can communicate technical maturity, applied judgment, and scientific direction without overclaiming.",
    body: [
      {
        heading: "The first read is about intent",
        paragraphs: [
          "When I open a genomic surveillance repository, I first ask what problem the author is trying to solve. Is the workflow for routine sequencing, outbreak investigation, pathogen discovery, dashboard generation, manuscript analysis, or training? A repository that states its intent clearly immediately feels more credible.",
          "The best repositories do not try to look large. They try to be legible. They show what the workflow expects, what it produces, how it can be run, and what limitations the author has already considered."
        ]
      },
      {
        heading: "What communicates maturity",
        points: [
          "The README explains the scientific question before the commands.",
          "The environment file makes installation reproducible.",
          "A dry run or test mode is available.",
          "Outputs are named consistently and described in plain language.",
          "The limitations section is specific rather than generic.",
          "References and tool citations are included."
        ]
      },
      {
        heading: "Writing matters because methods travel",
        paragraphs: [
          "A public repository can become a training document, a collaborator handoff, a manuscript supplement, or a future starting point for a different pathogen. Writing makes that possible. Comments, README notes, config examples, and output guides turn code into a reusable scientific object.",
          "This is why I treat public technical writing as part of the work. It shows how I think through practical problems: sample reality, tool choice, quality control, reproducibility, interpretation, and communication."
        ]
      },
      {
        heading: "A realistic publishing rhythm",
        paragraphs: [
          "A strong research blog does not need constant posts. It needs useful posts. A practical rhythm could be one methods article, one repository tutorial, one field-issue explainer, and one project reflection each month. Over time, that builds a public record of both technical range and scientific judgment."
        ]
      }
    ],
    references: [
      {
        title: "Nextclade open-source viral genome QC and mutation calling",
        url: "https://joss.theoj.org/papers/10.21105/joss.03773"
      },
      {
        title: "Snakemake sustainable data analysis",
        url: "https://pubmed.ncbi.nlm.nih.gov/34035898/"
      }
    ]
  }
];

const pipelines = [
  {
    group: "Polio workflows",
    title: "DDNS MinION VP1 Pipeline",
    slug: "ddns-minion-vp1-pipeline",
    repo: "https://github.com/adnanhaider81/ddns-minion-vp1-pipeline",
    updated: "2026-05-01",
    icon: "barcode",
    tags: ["Polio", "VP1", "MinION", "ONT"],
    summary:
      "Standalone ONT MinION VP1 analysis pipeline for DDNS stool-culture amplicon sequencing with barcode-folder review, reference benchmarking, consensus attempts, and HTML reports.",
    purpose:
      "Use this for MinKNOW-style fastq_pass barcode folders when VP1 amplicon reads need to be benchmarked against a bundled enterovirus/poliovirus VP1 reference panel and summarized for run review.",
    prerequisites: [
      "Conda or mamba",
      "MinKNOW-style fastq_pass directory with barcode folders",
      "Barcode map CSV with barcode and sample columns",
      "minimap2, samtools, cutadapt, filtlong, and medaka from the conda environment",
      "Bundled VP1 references and primer workbook from the repository"
    ],
    commands: [
      "git clone https://github.com/adnanhaider81/ddns-minion-vp1-pipeline.git",
      "cd ddns-minion-vp1-pipeline",
      "conda env create -f environment.yml",
      "conda activate ddns-minion-vp1-pipeline",
      "minimap2 --version && samtools --version && cutadapt --version && filtlong --version && medaka --version",
      "bash bin/ont_amplicon_vp1_by_folder.sh --barcode-map examples/barcodes.csv --fastq-pass /path/to/fastq_pass --out /path/to/output_dir --run-name stool_culture_vp1_run --threads 8 --min-len 1000 --max-len 1300 --min-cov 50"
    ],
    outputs: [
      "summary.tsv",
      "screen_per_reference.tsv",
      "benchmark_per_reference.tsv",
      "overall_reference_leaderboard.tsv",
      "top_hits_report.tsv",
      "all_best_consensus.fasta",
      "report.html",
      "results_bundle.zip"
    ]
  },
  {
    group: "Polio workflows",
    title: "WPV1 Phylodynamics and Phylogeography",
    slug: "polio-wpv1-phylodynamics",
    repo: "https://github.com/adnanhaider81/polio-wpv1-phylodynamics",
    updated: "2026-05-01",
    icon: "map",
    tags: ["Polio", "WPV1", "R", "Phylodynamics"],
    summary:
      "Reproducible R workflow for exploratory WPV1 phylogeographic analysis with synthetic example data, tree modes, stochastic character mapping, movement summaries, and optional GIS maps.",
    purpose:
      "Use this as a public methods template for VP1 alignment plus metadata workflows where restricted surveillance data cannot be shared but phylodynamic logic should remain testable.",
    prerequisites: [
      "R and Rscript",
      "Required R packages installed with scripts/install_packages.R",
      "VP1 FASTA alignment and metadata with FILENAME, Country, StateProv, locality, onsetdate, IsENV, and Cluster columns",
      "FastTree or IQ-TREE only for the optional tree modes",
      "Optional geospatial packages and boundary files for maps"
    ],
    commands: [
      "git clone https://github.com/adnanhaider81/polio-wpv1-phylodynamics.git",
      "cd polio-wpv1-phylodynamics",
      "Rscript scripts/install_packages.R",
      "Rscript run_pipeline.R --root . --mode distance --nsim 5 --seed 1",
      "make install",
      "make demo",
      "Rscript run_pipeline.R --root . --mode iqtree --ufboot 1000 --nsim 25"
    ],
    outputs: [
      "results/tables/",
      "results/figures/",
      "results/trees/",
      "movement corridor summaries",
      "root-to-tip diagnostics",
      "optional GIS maps under results/figures/"
    ]
  },
  {
    group: "Polio workflows",
    title: "Polio Whole-Capsid NGS Analysis",
    slug: "polio-capsid-ngs-analysis",
    repo: "https://github.com/adnanhaider81/polio-capsid-ngs-analysis",
    updated: "2026-05-01",
    icon: "shield-check",
    tags: ["Polio", "Snakemake", "Illumina", "FreeBayes"],
    summary:
      "Post-culture whole-capsid Illumina workflow for poliovirus consensus, antigenic-site analysis, phylogeny, and optional de novo checks.",
    purpose:
      "Use this when you have paired-end FASTQs from cultured poliovirus isolates and need masked consensus genomes, VP1-VP3 antigenic-site summaries, coverage, and phylogeny.",
    prerequisites: ["Linux, macOS, or WSL", "Conda or mamba", "Snakemake 7+", "Local FASTQs configured in config/config.yaml"],
    commands: [
      "git clone https://github.com/adnanhaider81/polio-capsid-ngs-analysis.git",
      "cd polio-capsid-ngs-analysis",
      "export NCBI_EMAIL=\"you@example.com\"",
      "mamba env create -f env/environment.yml",
      "conda activate polio-capsid-env",
      "snakemake -s workflow/Snakefile --configfile config/config.yaml -n -c 4",
      "snakemake -s workflow/Snakefile --configfile config/config.yaml -c 4 --printshellcmds"
    ],
    outputs: [
      "results/consensus/<sample>.fa",
      "results/aln/wg_alignment.fasta",
      "results/iqtree/wg.treefile",
      "results/mutations/<sample>_ag_sites.tsv"
    ]
  },
  {
    group: "Manuscript workflows",
    title: "SARS-CoV-2 Fourth Wave Pakistan",
    slug: "sarscov2-fourth-wave-2021-pakistan",
    repo: "https://github.com/adnanhaider81/sarscov2-fourth-wave-2021-pakistan",
    updated: "2026-03-14",
    icon: "activity",
    tags: ["SARS-CoV-2", "Pangolin", "Nextstrain", "Snakemake"],
    summary:
      "iSeq amplicon workflow for QC, consensus, Pangolin lineage assignment, MAFFT/IQ-TREE phylogeny, and optional Augur/Auspice builds.",
    purpose:
      "Use this for short-read SARS-CoV-2 amplicon data when you need lineage calls, consensus FASTA, a maximum-likelihood tree, and optional Nextstrain output.",
    prerequisites: ["Python 3.11+", "Conda or mamba", "Snakemake", "Nextstrain tools only if Augur/Auspice output is enabled"],
    commands: [
      "git clone https://github.com/adnanhaider81/sarscov2-fourth-wave-2021-pakistan.git",
      "cd sarscov2-fourth-wave-2021-pakistan",
      "export NCBI_EMAIL=\"you@example.com\"",
      "conda env create -f env/environment.yml",
      "conda activate sarscov2-fourthwave-env",
      "snakemake -s workflow/Snakefile -c 4 --printshellcmds",
      "make nextstrain"
    ],
    outputs: [
      "results/consensus/all_consensus.fasta",
      "results/pangolin/lineage_report.csv",
      "results/iqtree/wg.treefile",
      "results/nextstrain/auspice/sarscov2_fourth_wave.json"
    ]
  },
  {
    group: "Manuscript workflows",
    title: "mpox and VZV Coinfection Workflow",
    slug: "mpox-vzv-coinfection-2023-pakistan",
    repo: "https://github.com/adnanhaider81/mpox-vzv-coinfection-2023-pakistan",
    updated: "2026-03-14",
    icon: "scan-search",
    tags: ["mNGS", "MPXV", "VZV", "Kraken2"],
    summary:
      "Metagenomic discovery plus targeted MPXV/VZV analysis with separate consensus genomes, phylogenies, and mutation reports.",
    purpose:
      "Use this when a metagenomic sample may contain more than one DNA virus and you need discovery evidence plus targeted follow-up for MPXV and VZV.",
    prerequisites: ["Conda or mamba", "Snakemake", "Kraken2 and Kaiju databases if discovery classification is enabled", "NCBI email for Entrez/BLAST steps"],
    commands: [
      "git clone https://github.com/adnanhaider81/mpox-vzv-coinfection-2023-pakistan.git",
      "cd mpox-vzv-coinfection-2023-pakistan",
      "export NCBI_EMAIL=\"you@example.com\"",
      "conda env create -f env/environment.yml",
      "conda activate mpox-vzv-env",
      "snakemake -s workflow/Snakefile -c 4 --printshellcmds"
    ],
    outputs: [
      "results/consensus/mpox/<sample>.fa",
      "results/consensus/vzv/<sample>.fa",
      "results/iqtree/mpox.treefile",
      "results/iqtree/vzv.treefile",
      "results/taxonomy/<sample>_summary.tsv"
    ]
  },
  {
    group: "Manuscript workflows",
    title: "RSV Islamabad Manuscript Analysis",
    slug: "rsv-islamabad-2022-2023-analysis",
    repo: "https://github.com/adnanhaider81/rsv-islamabad-2022-2023-analysis",
    updated: "2025-09-30",
    icon: "lungs",
    tags: ["RSV-A", "RSV-B", "Nextclade", "Snakemake"],
    summary:
      "Reference-based RSV-A/RSV-B assembly, depth masking, de novo checks, phylogeny, genotype assignment, and G/F mutation analysis.",
    purpose:
      "Use this for RSV paired-end FASTQs when you need manuscript-style consensus, Nextclade genotype calls, context trees, and amino-acid differences in G and F.",
    prerequisites: ["Python 3.11+", "Conda or mamba", "Snakemake", "NCBI email for Entrez-based steps"],
    commands: [
      "git clone https://github.com/adnanhaider81/rsv-islamabad-2022-2023-analysis.git",
      "cd rsv-islamabad-2022-2023-analysis",
      "export NCBI_EMAIL=\"you@example.com\"",
      "conda env create -f env/environment.yml",
      "conda activate rsv-env",
      "snakemake -s workflow/Snakefile -c 4 --printshellcmds"
    ],
    outputs: [
      "results/consensus/all_consensus.fasta",
      "results/aln/consensus_alignment.fasta",
      "results/iqtree/consensus.treefile",
      "results/mutations_rsv_*.tsv"
    ]
  },
  {
    group: "Manuscript workflows",
    title: "CCHFV Segmented Analysis",
    slug: "cchfv-segmented-analysis-2022-pakistan",
    repo: "https://github.com/adnanhaider81/cchfv-segmented-analysis-2022-pakistan",
    updated: "2025-09-29",
    icon: "split",
    tags: ["CCHFV", "Segmented virus", "Reassortment", "Snakemake"],
    summary:
      "Segment-aware CCHFV workflow for S, M, and L contigs, BLAST-guided reference choice, masked consensus, phylogeny, and reassortment flags.",
    purpose:
      "Use this for segmented bunyavirus analysis where each segment may have different nearest relatives and reassortment must be checked explicitly.",
    prerequisites: ["Python 3.11+", "Conda or mamba", "BLAST remote or local nt", "Snakemake"],
    commands: [
      "git clone https://github.com/adnanhaider81/cchfv-segmented-analysis-2022-pakistan.git",
      "cd cchfv-segmented-analysis-2022-pakistan",
      "conda env create -f env/environment.yml",
      "conda activate cchfv-seg-env",
      "export NCBI_EMAIL=\"you@example.com\"",
      "snakemake -s workflow/Snakefile -c 4 --printshellcmds"
    ],
    outputs: [
      "results/segments/<sample>_segment_calls.tsv",
      "results/consensus/<sample>.S.fa, .M.fa, .L.fa",
      "results/iqtree/S.treefile, M.treefile, L.treefile",
      "results/reports/<sample>_reassortment_flag.txt"
    ]
  },
  {
    group: "Manuscript workflows",
    title: "CV-A24v AHC 2023 Analysis",
    slug: "cva24v-ahc-2023-analysis",
    repo: "https://github.com/adnanhaider81/cva24v-ahc-2023-analysis",
    updated: "2025-09-29",
    icon: "eye",
    tags: ["CV-A24v", "mNGS", "VP1", "Phylogeny"],
    summary:
      "Metagenomic discovery plus targeted CV-A24v workflow with whole-genome and VP1 trees, mutation summaries, and context fetching.",
    purpose:
      "Use this for acute hemorrhagic conjunctivitis mNGS data when discovery evidence needs to connect to targeted CV-A24v consensus and phylogeny.",
    prerequisites: ["Conda or mamba", "Snakemake", "Kraken2/Kaiju databases if enabled", "NCBI email"],
    commands: [
      "git clone https://github.com/adnanhaider81/cva24v-ahc-2023-analysis.git",
      "cd cva24v-ahc-2023-analysis",
      "export NCBI_EMAIL=\"you@example.com\"",
      "conda env create -f env/environment.yml",
      "conda activate cva24v-env",
      "snakemake -s workflow/Snakefile -c 4 --printshellcmds"
    ],
    outputs: [
      "results/discovery/<sample>_taxonomy_summary.tsv",
      "results/consensus/all_consensus.fasta",
      "results/iqtree/wg.treefile",
      "results/iqtree/vp1.treefile",
      "results/mutations/aa_changes.tsv"
    ]
  },
  {
    group: "Manuscript workflows",
    title: "DENV 2023 Pakistan Analysis",
    slug: "denv-2023-pakistan-analysis",
    repo: "https://github.com/adnanhaider81/denv-2023-pakistan-analysis",
    updated: "2025-09-29",
    icon: "syringe",
    tags: ["DENV-1", "DENV-2", "SPAdes", "IQ-TREE"],
    summary:
      "End-to-end DENV-1/DENV-2 Snakemake workflow for mNGS QC, de novo checks, masked consensus, phylogeny, and polyprotein mutation tables.",
    purpose:
      "Use this for dengue outbreak sequencing when you need serotype-aware references, genome consensus, context trees, and protein-level mutation summaries.",
    prerequisites: ["Python 3.11+", "Conda or mamba", "Snakemake", "BLAST+ with remote enabled", "Entrez Direct"],
    commands: [
      "git clone https://github.com/adnanhaider81/denv-2023-pakistan-analysis.git",
      "cd denv-2023-pakistan-analysis",
      "export NCBI_EMAIL=\"you@example.com\"",
      "conda env create -f env/environment.yml",
      "conda activate denv-2023-env",
      "snakemake -s workflow/Snakefile -c 4 --printshellcmds"
    ],
    outputs: [
      "results/consensus/all_consensus.fasta",
      "results/aln/wg_alignment.fasta",
      "results/iqtree/wg.treefile",
      "results/mutations/<sample>_aa_diffs.tsv"
    ]
  },
  {
    group: "Manuscript workflows",
    title: "Mumps Genotype G Analysis",
    slug: "mumps-2023-pakistan-analysis",
    repo: "https://github.com/adnanhaider81/mumps-2023-pakistan-analysis",
    updated: "2025-09-29",
    icon: "file-text",
    tags: ["Mumps", "SH gene", "Whole genome", "Snakemake"],
    summary:
      "MuV genotype G workflow for WGS and optional SH analysis, with masked consensus, SH and whole-genome trees, and HN/F mutation tables.",
    purpose:
      "Use this for mumps outbreak genomics where both short SH-region epidemiology and whole-genome context are useful.",
    prerequisites: ["Python 3.11+", "Conda or mamba", "Snakemake", "BLAST+ and Entrez Direct"],
    commands: [
      "git clone https://github.com/adnanhaider81/mumps-2023-pakistan-analysis.git",
      "cd mumps-2023-pakistan-analysis",
      "export NCBI_EMAIL=\"you@example.com\"",
      "conda env create -f env/environment.yml",
      "conda activate mumps-2023-env",
      "snakemake -s workflow/Snakefile -c 4 --printshellcmds"
    ],
    outputs: [
      "results/consensus/all_consensus.fasta",
      "results/iqtree/sh.treefile",
      "results/iqtree/wg.treefile",
      "results/mutations/SH_HN_F reports"
    ]
  },
  {
    group: "Other repositories",
    title: "RSV Short-Read Teaching Pipeline",
    slug: "rsv-islamabad-2022-2023-pipeline",
    repo: "https://github.com/adnanhaider81/rsv-islamabad-2022-2023-pipeline",
    updated: "2025-10-02",
    icon: "book-open",
    tags: ["RSV", "Manual tutorial", "BWA", "bcftools"],
    summary:
      "A more explicit tutorial-style RSV workflow with manual single-sample commands, Nextclade notes, and tree-building guidance.",
    purpose:
      "Use this as a training resource when you want learners to understand each command in the RSV reference-based consensus path.",
    prerequisites: ["FastQC", "Trimmomatic", "BWA", "SAMtools", "BCFtools", "Picard", "Optional Snakemake/Conda"],
    commands: [
      "git clone https://github.com/adnanhaider81/rsv-islamabad-2022-2023-pipeline.git",
      "cd rsv-islamabad-2022-2023-pipeline",
      "export NCBI_EMAIL=\"you@example.com\"",
      "conda env create -f env/environment.yml",
      "conda activate rsv-env",
      "snakemake -s workflow/Snakefile -c 4 --printshellcmds"
    ],
    outputs: [
      "results/<sample>/<sample>.consensus.fasta",
      "results/<sample>/<sample>.depth.txt",
      "results/iqtree/rsv_tree.treefile",
      "results/mutations_rsv_a.tsv and results/mutations_rsv_b.tsv"
    ]
  },
  {
    group: "Other repositories",
    title: "Pathogen Discovery Pipeline",
    slug: "pathogen-discovery-pipeline",
    repo: "https://github.com/adnanhaider81/pathogen-discovery-pipeline",
    updated: "2025-12-23",
    icon: "radar",
    tags: ["Host subtraction", "Competitive mapping", "Shell", "Metagenomics"],
    summary:
      "Panel-driven confirmatory mapping workflow with host subtraction and competitive mapping for bacteria, DNA viruses, fungi, and parasites.",
    purpose:
      "Use this after an initial metagenomic screen to ask whether reads preferentially map to a curated organism panel and whether breadth/depth support follow-up.",
    prerequisites: ["Linux with Bash", "Conda or mamba", "Enough disk for downloaded NCBI reference genomes", "Configured host and pathogen taxon lists"],
    commands: [
      "git clone https://github.com/adnanhaider81/pathogen-discovery-pipeline.git",
      "cd pathogen-discovery-pipeline",
      "conda env create -f environment.yml",
      "conda activate pathogen_discovery_pipeline",
      "FASTQ_DIR=/path/to/fastqs FIRST_SAMPLE=1 LAST_SAMPLE=22 THREADS=14 MIN_MAPQ=20 OUTDIR=results bin/pathogen_discovery_pipeline.sh"
    ],
    outputs: [
      "results/confirm_summary_competitive.tsv",
      "results/nonhost_fastq/<sample>.nonhost_R1.fastq.gz",
      "results/metrics/<sample>/coverage_by_contig.tsv",
      "results/bams/<sample>/combined.bam"
    ]
  },
  {
    group: "Other repositories",
    title: "Nextstrain ncov Pakistan Fork",
    slug: "ncov",
    repo: "https://github.com/adnanhaider81/ncov",
    updated: "2025-09-28",
    icon: "network",
    tags: ["Nextstrain", "SARS-CoV-2", "Dashboard", "Fork"],
    summary:
      "Fork of the Pakistan SARS-CoV-2 genomic epidemiology build, useful for showing dashboard-oriented genomic surveillance experience.",
    purpose:
      "Use this to document Nextstrain/ncov exposure and dashboard-oriented surveillance work. Exact run commands depend on the active branch and upstream Nextstrain configuration.",
    prerequisites: ["Nextstrain CLI", "Curated metadata", "FASTA aligned with metadata strain names", "Auspice for local viewing"],
    commands: [
      "git clone https://github.com/adnanhaider81/ncov.git",
      "cd ncov",
      "nextstrain check-setup",
      "nextstrain build . --help",
      "nextstrain view auspice/"
    ],
    outputs: [
      "Auspice JSON files",
      "time-resolved phylogenetic visualizations",
      "curated metadata and contextual sequence outputs"
    ]
  }
];

const pipelineEnhancements = {
  "ddns-minion-vp1-pipeline": {
    question:
      "Can barcode-folder ONT VP1 amplicon data from DDNS stool-culture sequencing be screened, benchmarked, summarized, and reviewed without exposing private run data?",
    methodNotes: [
      "User-facing wrapper calls an internal VP1 engine, fixed bundled references, primer workbook resources, report-table generation, and an HTML report.",
      "The repository includes smoke tests that validate shell syntax, Python report scripts, and bundled resource checksums without requiring MinION FASTQ data."
    ],
    qualityChecks: [
      "Confirm barcode map columns are barcode and sample, with neutral sample IDs for public outputs.",
      "Check tool availability with minimap2, samtools, cutadapt, filtlong, and medaka version commands.",
      "Review screen_per_reference.tsv, benchmark_per_reference.tsv, and top_hits_report.tsv before interpreting consensus candidates."
    ],
    interpretationNotes: [
      "The VP1 report is strongest as a run-review and candidate-reference prioritization product.",
      "Consensus calls should be interpreted with coverage, read length filters, barcode mapping, and reference leaderboard context."
    ]
  },
  "polio-wpv1-phylodynamics": {
    question:
      "Can WPV1 VP1 alignment and metadata be turned into a reproducible exploratory phylogeographic workflow while keeping restricted surveillance data outside the public repository?",
    methodNotes: [
      "R workflow supports synthetic demo data, distance/FastTree/IQ-TREE tree modes, treedater time scaling, phytools stochastic character mapping, and optional GIS maps.",
      "The public synthetic dataset makes the workflow runnable without releasing raw surveillance sequences or operational metadata."
    ],
    qualityChecks: [
      "Confirm metadata columns match FASTA headers, dates use YYYY-MM-DD, and regional labels are consistent.",
      "Use distance mode first for testing, then FastTree or IQ-TREE when external tools are installed.",
      "Treat movement corridor, import/export, persistence, and root-to-tip outputs as exploratory unless sensitivity analyses are added."
    ],
    interpretationNotes: [
      "This is a strong methods-template repository because it demonstrates phylodynamic reasoning while respecting data-use limits.",
      "Manuscript-grade inference should add temporal-signal testing, sampling-bias sensitivity checks, model comparison, and uncertainty reporting."
    ]
  },
  "polio-capsid-ngs-analysis": {
    question:
      "Can cultured poliovirus isolates be converted into whole-capsid consensus genomes with enough QC detail for antigenic-site review and phylogeny?",
    methodNotes: [
      "Config-driven Snakemake workflow for paired-end FASTQs, reference mapping, consensus generation, antigenic-site summaries, and tree building.",
      "Uses a dry run before execution so sample paths, rules, and expected outputs can be checked before compute time is spent."
    ],
    qualityChecks: [
      "Confirm sample names and FASTQ pairing in config/config.yaml.",
      "Review breadth and depth before accepting consensus FASTA.",
      "Inspect antigenic-site TSV files alongside the tree rather than treating mutation calls alone as interpretation."
    ],
    interpretationNotes: [
      "Strong outputs should include a masked consensus, whole-genome alignment, tree file, and antigenic-site table.",
      "Low-coverage regions should be reported as uncertainty, not silently converted into confident bases."
    ]
  },
  "sarscov2-fourth-wave-2021-pakistan": {
    question:
      "How did fourth-wave SARS-CoV-2 samples from Pakistan resolve into consensus genomes, Pangolin lineages, phylogeny, and optional Nextstrain visualization?",
    methodNotes: [
      "Short-read amplicon workflow with consensus generation, lineage assignment, MAFFT/IQ-TREE phylogeny, and optional Augur/Auspice output.",
      "The repository demonstrates the full bridge from FASTQ processing to interpretable outbreak figures."
    ],
    qualityChecks: [
      "Check consensus completeness before trusting lineage assignments.",
      "Review Pangolin output together with coverage and ambiguity metrics.",
      "Use the Nextstrain build as a communication product, not as the only evidence."
    ],
    interpretationNotes: [
      "Lineage calls are strongest when the consensus has high genome recovery and low ambiguity.",
      "Phylogenetic clustering should be interpreted with sampling context and metadata quality."
    ]
  },
  "mpox-vzv-coinfection-2023-pakistan": {
    question:
      "Can metagenomic evidence support a dual-virus interpretation and then separate MPXV and VZV consensus/phylogeny outputs?",
    methodNotes: [
      "Combines broad discovery classification with targeted follow-up workflows for two DNA viruses.",
      "Separate output folders keep MPXV and VZV evidence from being mixed during interpretation."
    ],
    qualityChecks: [
      "Review taxonomy summaries before targeted interpretation.",
      "Confirm that both viruses have independent read support and coverage patterns.",
      "Inspect negative controls and database assumptions when abundance is low."
    ],
    interpretationNotes: [
      "Coinfection claims should be written cautiously unless both targets show convincing breadth and controls are clean.",
      "Targeted consensus files and separate trees make the evidence easier to audit."
    ]
  },
  "pathogen-discovery-pipeline": {
    question:
      "After an initial metagenomic signal, do reads preferentially support one organism over host background and close alternatives?",
    methodNotes: [
      "Shell workflow for host subtraction, curated organism panels, confirmatory mapping, and competitive evidence summaries.",
      "Designed as a conservative follow-up layer after broad taxonomic screening."
    ],
    qualityChecks: [
      "Confirm host reference selection before subtraction.",
      "Review breadth, depth, and mapping quality across candidate organisms.",
      "Treat low-breadth or single-region hits as investigation leads, not final identifications."
    ],
    interpretationNotes: [
      "The main value is not only detection; it is ranking evidence against plausible alternatives.",
      "The confirm_summary_competitive.tsv file should be read together with per-sample coverage metrics."
    ]
  },
  "rsv-islamabad-2022-2023-analysis": {
    question:
      "Can RSV-A and RSV-B short-read data be converted into manuscript-ready consensus genomes, genotype calls, trees, and G/F mutation summaries?",
    methodNotes: [
      "Reference-based RSV workflow with depth masking, de novo checks, Nextclade genotype support, alignment, and tree building.",
      "The structure suits manuscript analysis because consensus, alignment, tree, and mutation outputs are separated."
    ],
    qualityChecks: [
      "Confirm subtype-aware reference choice.",
      "Review depth masking and ambiguous-base percentage.",
      "Check G and F mutation summaries against consensus quality."
    ],
    interpretationNotes: [
      "Genotype and mutation interpretation should be limited when genome recovery is partial.",
      "Context trees should be described with sampling dates and sequence selection rules."
    ]
  },
  "rsv-islamabad-2022-2023-pipeline": {
    question:
      "How can learners understand the RSV short-read consensus path command by command before moving to automated workflow execution?",
    methodNotes: [
      "Teaching-oriented pipeline that makes FASTQC, trimming, mapping, depth review, consensus generation, and tree-building steps explicit.",
      "Useful for training because it exposes the reasoning behind each file produced."
    ],
    qualityChecks: [
      "Ask learners to inspect each intermediate file before continuing.",
      "Compare manual outputs with workflow outputs when both are available.",
      "Use depth files to explain why masking and failure rules matter."
    ],
    interpretationNotes: [
      "This is strongest as a training and capacity-building repository.",
      "The manual structure helps connect command-line operations to biological interpretation."
    ]
  },
  "cchfv-segmented-analysis-2022-pakistan": {
    question:
      "Can S, M, and L segments be analyzed separately so reference choice, consensus, phylogeny, and reassortment interpretation stay segment-aware?",
    methodNotes: [
      "Segment-specific workflow for BLAST-guided reference selection, masked consensus generation, per-segment trees, and reassortment flagging.",
      "The design reflects the biology of segmented viruses instead of forcing one whole-genome assumption."
    ],
    qualityChecks: [
      "Review segment calls independently.",
      "Check whether each segment has enough breadth and depth for phylogeny.",
      "Interpret reassortment only after inspecting all three segment trees."
    ],
    interpretationNotes: [
      "Different nearest relatives across segments can be meaningful, but sparse context can also mislead.",
      "Segment-aware reporting should state confidence separately for S, M, and L."
    ]
  },
  "cva24v-ahc-2023-analysis": {
    question:
      "Can mNGS evidence from acute hemorrhagic conjunctivitis be connected to targeted CV-A24v consensus, VP1 phylogeny, and mutation summaries?",
    methodNotes: [
      "Combines discovery evidence with targeted enterovirus analysis, whole-genome context, VP1 tree building, and amino-acid summaries.",
      "The workflow separates broad detection from targeted viral-genomics interpretation."
    ],
    qualityChecks: [
      "Confirm discovery reads before targeted interpretation.",
      "Review VP1 and whole-genome trees for consistent placement.",
      "Inspect mutation summaries only after checking coverage across relevant regions."
    ],
    interpretationNotes: [
      "VP1 can be especially useful for enterovirus context, but whole-genome evidence adds depth when recovered.",
      "Reports should state whether conclusions are VP1-limited or whole-genome supported."
    ]
  },
  "denv-2023-pakistan-analysis": {
    question:
      "Can dengue mNGS data resolve serotype-aware consensus genomes, phylogeny, and polyprotein mutation summaries for outbreak interpretation?",
    methodNotes: [
      "End-to-end Snakemake workflow for DENV-1/DENV-2 reference-aware analysis, de novo checks, masked consensus, IQ-TREE phylogeny, and protein-level reporting.",
      "The workflow is useful when serotype and genome recovery both shape interpretation."
    ],
    qualityChecks: [
      "Confirm serotype before selecting reference-driven interpretation.",
      "Review de novo and mapping evidence together.",
      "Check mutation tables against coverage so amino-acid calls are not overread."
    ],
    interpretationNotes: [
      "Dengue reports should separate serotype, genotype/phylogeny, and protein-level changes.",
      "Partial genomes can support some conclusions while being unsuitable for others."
    ]
  },
  "mumps-2023-pakistan-analysis": {
    question:
      "Can mumps genotype G analysis combine SH-region epidemiology with whole-genome context and HN/F mutation review?",
    methodNotes: [
      "Workflow supports WGS and optional SH analysis, with separate trees and mutation reporting for epidemiological and functional context.",
      "This is useful because SH and whole-genome analyses answer related but not identical questions."
    ],
    qualityChecks: [
      "Check whether the sequence supports SH-only or whole-genome interpretation.",
      "Review SH and whole-genome trees separately.",
      "Inspect HN/F mutation reports only where coverage is adequate."
    ],
    interpretationNotes: [
      "SH-region genotype evidence can be useful, but whole-genome context gives stronger outbreak resolution.",
      "The final report should state which level of resolution the data actually support."
    ]
  },
  "ncov": {
    question:
      "How can a Nextstrain/ncov-style fork support dashboard-oriented genomic epidemiology and communication?",
    methodNotes: [
      "Repository demonstrates exposure to Nextstrain build structure, Auspice outputs, metadata-driven visualization, and pathogen dashboard logic.",
      "Exact commands depend on branch and upstream configuration, so the tutorial keeps this entry honest by focusing on setup inspection."
    ],
    qualityChecks: [
      "Run nextstrain check-setup before attempting builds.",
      "Inspect metadata and FASTA strain-name consistency.",
      "Use nextstrain build help to confirm the active branch expectations."
    ],
    interpretationNotes: [
      "Dashboard outputs are only as strong as metadata quality and contextual sampling.",
      "This repository is best framed as surveillance visualization experience rather than a fixed one-command analysis."
    ]
  }
};

pipelines.forEach((pipeline) => {
  Object.assign(pipeline, pipelineEnhancements[pipeline.slug] || {});
});

const pipelineGroupOrder = ["Polio workflows", "Manuscript workflows", "Other repositories"];

const filters = ["All", ...Array.from(new Set(posts.map((post) => post.category)))];
const filterRow = document.querySelector("#filterRow");
const postGrid = document.querySelector("#postGrid");
const emptyState = document.querySelector("#emptyState");
const searchInput = document.querySelector("#searchInput");
const reader = document.querySelector("#reader");
const pipelineGrid = document.querySelector("#pipelineGrid");
const pipelineDetail = document.querySelector("#pipelineDetail");
let activeFilter = "All";

function escapeHTML(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatDate(dateString) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric"
  }).format(new Date(`${dateString}T00:00:00`));
}

function renderList(items) {
  return `<ul>${items.map((item) => `<li>${escapeHTML(item)}</li>`).join("")}</ul>`;
}

function postMatches(post, query) {
  const normalized = query.trim().toLowerCase();
  const text = [post.title, post.summary, post.category, ...post.tags].join(" ").toLowerCase();
  const filterMatch = activeFilter === "All" || post.category === activeFilter;
  return filterMatch && (!normalized || text.includes(normalized));
}

function renderFilters() {
  filterRow.innerHTML = filters
    .map(
      (filter) => `
        <button class="filter-button" type="button" aria-pressed="${filter === activeFilter}" data-filter="${escapeHTML(filter)}">
          ${escapeHTML(filter)}
        </button>
      `
    )
    .join("");
}

function renderPosts() {
  const query = searchInput.value;
  const visiblePosts = posts.filter((post) => postMatches(post, query));

  postGrid.innerHTML = visiblePosts
    .map(
      (post) => `
        <a class="post-card" href="#post/${escapeHTML(post.slug)}">
          <div class="post-meta">
            <span>${escapeHTML(post.category)}</span>
            <time datetime="${escapeHTML(post.date)}">${formatDate(post.date)}</time>
          </div>
          <div>
            <h3>${escapeHTML(post.title)}</h3>
            <p>${escapeHTML(post.summary)}</p>
          </div>
          <div class="post-footer">
            <span>${post.minutes} min read</span>
            <i data-lucide="arrow-up-right"></i>
          </div>
        </a>
      `
    )
    .join("");

  emptyState.hidden = visiblePosts.length > 0;
  refreshIcons();
}

function renderBodySection(section) {
  return `
    <section>
      <h3>${escapeHTML(section.heading)}</h3>
      ${(section.paragraphs || []).map((paragraph) => `<p>${escapeHTML(paragraph)}</p>`).join("")}
      ${
        section.points
          ? renderList(section.points)
          : ""
      }
      ${
        section.commands
          ? `<pre><code>${escapeHTML(section.commands.join("\n"))}</code></pre>`
          : ""
      }
    </section>
  `;
}

function renderReferences(post) {
  if (!post.references || post.references.length === 0) {
    return "";
  }

  return `
    <section class="reader-references">
      <h3>References and Further Reading</h3>
      <ol>
        ${post.references
          .map(
            (reference) => `
              <li>
                <a href="${escapeHTML(reference.url)}">${escapeHTML(reference.title)}</a>
              </li>
            `
          )
          .join("")}
      </ol>
    </section>
  `;
}

function renderReader(post) {
  if (!post) {
    reader.hidden = true;
    return;
  }

  reader.hidden = false;
  reader.innerHTML = `
    <article>
      <header class="reader-header">
        <a class="reader-back" href="#writing">
          <i data-lucide="arrow-left"></i>
          Back to writing
        </a>
        <div class="post-meta">
          <span>${escapeHTML(post.category)}</span>
          <time datetime="${escapeHTML(post.date)}">${formatDate(post.date)}</time>
          <span>${post.minutes} min read</span>
        </div>
        <h2>${escapeHTML(post.title)}</h2>
        <p>${escapeHTML(post.summary)}</p>
        <div class="post-meta">
          ${post.tags.map((tag) => `<span class="tag">${escapeHTML(tag)}</span>`).join("")}
        </div>
      </header>
      <div class="reader-body">
        ${post.body.map(renderBodySection).join("")}
      </div>
      ${renderReferences(post)}
    </article>
  `;

  refreshIcons();
  reader.scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderPipelineCard(pipeline) {
  return `
    <article class="pipeline-card">
      <header>
        <i data-lucide="${escapeHTML(pipeline.icon)}"></i>
        <span class="pipeline-updated">Updated ${formatDate(pipeline.updated)}</span>
      </header>
      <div>
        <h3>${escapeHTML(pipeline.title)}</h3>
        <p>${escapeHTML(pipeline.summary)}</p>
        <div class="pipeline-tags">
          ${pipeline.tags.map((tag) => `<span>${escapeHTML(tag)}</span>`).join("")}
        </div>
        ${
          pipeline.question
            ? `<ul class="pipeline-snapshot">
                <li><strong>Question:</strong> ${escapeHTML(pipeline.question)}</li>
                <li><strong>QC focus:</strong> ${escapeHTML(pipeline.qualityChecks[0])}</li>
              </ul>`
            : ""
        }
      </div>
      <div class="pipeline-actions">
        <button type="button" data-pipeline="${escapeHTML(pipeline.slug)}">
          <i data-lucide="list-checks"></i>
          Run notes
        </button>
        <a href="${escapeHTML(pipeline.repo)}">
          <i data-lucide="github"></i>
          Repository
        </a>
      </div>
    </article>
  `;
}

function renderPipelines() {
  pipelineGrid.innerHTML = pipelineGroupOrder
    .map((group) => {
      const groupPipelines = pipelines.filter((pipeline) => pipeline.group === group);
      if (groupPipelines.length === 0) return "";

      return `
        <section class="pipeline-group">
          <div class="pipeline-group-heading">
            <div>
              <p class="section-kicker">Repository Group</p>
              <h3>${escapeHTML(group)}</h3>
            </div>
            <span class="pipeline-group-count">${groupPipelines.length} repositories</span>
          </div>
          <div class="pipeline-grid">
            ${groupPipelines.map(renderPipelineCard).join("")}
          </div>
        </section>
      `;
    })
    .join("");
  refreshIcons();
}

function renderPipelineDetail(pipeline) {
  if (!pipeline) {
    pipelineDetail.hidden = true;
    return;
  }

  pipelineDetail.hidden = false;
  pipelineDetail.innerHTML = `
    <article>
      <header>
        <div>
          <span class="pipeline-updated">Updated ${formatDate(pipeline.updated)}</span>
          <h3>${escapeHTML(pipeline.title)}</h3>
          <p>${escapeHTML(pipeline.purpose)}</p>
        </div>
        <a class="repo-link" href="${escapeHTML(pipeline.repo)}">
          <i data-lucide="github"></i>
          Open repo
        </a>
      </header>

      <h4>Scientific Question</h4>
      <p>${escapeHTML(pipeline.question || pipeline.purpose)}</p>

      <div class="detail-grid">
        <section class="detail-panel">
          <h4>Method Notes</h4>
          ${renderList(pipeline.methodNotes || [pipeline.purpose])}
        </section>
        <section class="detail-panel">
          <h4>Quality Checks</h4>
          ${renderList(pipeline.qualityChecks || pipeline.prerequisites)}
        </section>
      </div>

      <h4>Before You Run</h4>
      ${renderList(pipeline.prerequisites)}

      <h4>Step-by-Step Run</h4>
      <ol>
        <li>Clone the repository and enter the project folder.</li>
        <li>Set <code>NCBI_EMAIL</code> for Entrez or BLAST-assisted steps when required.</li>
        <li>Create and activate the conda environment from the repository.</li>
        <li>Edit the documented config, barcode map, sample sheet, or metadata files to point at local inputs and databases.</li>
        <li>Run the workflow first as a dry run if supported, then run with shell commands printed.</li>
        <li>Review consensus, QC, phylogeny, mutation, and report outputs before interpretation.</li>
      </ol>

      <pre class="code-block"><code>${escapeHTML(pipeline.commands.join("\n"))}</code></pre>

      <h4>Interpretation Notes</h4>
      ${renderList(pipeline.interpretationNotes || ["Review the workflow outputs with sample metadata, QC status, and known limitations before making biological claims."])}

      <h4>Outputs To Inspect</h4>
      <ul>${pipeline.outputs.map((item) => `<li><code>${escapeHTML(item)}</code></li>`).join("")}</ul>
    </article>
  `;

  refreshIcons();
  pipelineDetail.scrollIntoView({ behavior: "smooth", block: "start" });
}

function handleRoute() {
  const match = window.location.hash.match(/^#post\/(.+)$/);
  const post = match ? posts.find((item) => item.slug === match[1]) : null;
  renderReader(post);
}

function refreshIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

filterRow.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-filter]");
  if (!button) return;
  activeFilter = button.dataset.filter;
  renderFilters();
  renderPosts();
});

pipelineGrid.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-pipeline]");
  if (!button) return;
  const pipeline = pipelines.find((item) => item.slug === button.dataset.pipeline);
  renderPipelineDetail(pipeline);
});

searchInput.addEventListener("input", renderPosts);
window.addEventListener("hashchange", handleRoute);

renderFilters();
renderPosts();
renderPipelines();
handleRoute();
refreshIcons();

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
    title: "From FASTQ to public-health report: a viral genomics workflow",
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
    title: "How I review an ONT/DDNS run for poliovirus VP1 evidence",
    slug: "review-ont-ddns-run-poliovirus-vp1",
    category: "Tutorials",
    date: "2026-05-17",
    minutes: 12,
    tags: ["DDNS", "Nanopore", "Poliovirus"],
    summary:
      "A practical review checklist for ONT MinION barcode folders, VP1 reference hits, coverage evidence, controls, and report language in poliovirus DDNS work.",
    body: [
      {
        heading: "Start with the run, not the consensus",
        paragraphs: [
          "When I review an ONT/DDNS run, I do not begin by asking whether a consensus FASTA was produced. I begin by asking whether the run itself supports interpretation: barcode yield, read length distribution, sample sheet integrity, controls, and whether the run report matches the laboratory notes.",
          "For poliovirus VP1 work, early review protects the downstream call. A strong hit table is less persuasive if the barcode map is ambiguous, the read yield is very uneven, or negative controls show unexpected target-like reads."
        ]
      },
      {
        heading: "Barcode-level evidence",
        points: [
          "Confirm that each barcode folder maps to one neutral sample identifier.",
          "Check total reads, filtered reads, and the proportion retained after length and quality filters.",
          "Review whether the best VP1 reference hit is supported by both read count and coverage breadth.",
          "Look for close second-place references that could indicate mixture, near-neighbor ambiguity, or low-confidence assignment.",
          "Separate screening evidence from consensus evidence in the final report."
        ]
      },
      {
        heading: "Consensus confidence",
        paragraphs: [
          "A consensus sequence should be read with its depth profile. I look for continuous VP1 coverage, gaps near primer sites, suspicious depth spikes, and stretches of ambiguous bases. If the consensus is partial, the report should say that plainly instead of presenting a complete-genome style conclusion.",
          "The most useful DDNS report is not just a list of references. It is a decision aid: which samples have enough evidence for review, which need repeat sequencing, and which should be treated as weak or background signal."
        ]
      },
      {
        heading: "Report language",
        points: [
          "Use strong wording only when read support, breadth, controls, and reference ranking agree.",
          "Use cautious wording when the run supports a lead but not a confident genotype-level conclusion.",
          "Keep restricted sample identities out of public reports and repositories.",
          "Preserve enough run metadata for audit without exposing operationally sensitive details."
        ]
      }
    ],
    references: [
      {
        title: "DDNS MinION VP1 pipeline repository",
        url: "https://github.com/adnanhaider81/ddns-minion-vp1-pipeline"
      },
      {
        title: "Rapid and sensitive direct detection and identification of poliovirus using nanopore sequencing",
        url: "https://www.nature.com/articles/s41564-020-00806-9"
      },
      {
        title: "WHO environmental surveillance summary for poliovirus",
        url: "https://www.who.int/publications/m/item/wastewater-and-environmental-surveillance--summary-for-poliovirus"
      }
    ]
  },
  {
    title: "Why synthetic data matters in public-health bioinformatics",
    slug: "synthetic-data-public-health-bioinformatics",
    category: "Tutorials",
    date: "2026-05-17",
    minutes: 11,
    tags: ["Synthetic data", "Reproducibility", "Training"],
    summary:
      "Why public repositories for surveillance workflows should include safe synthetic inputs, expected outputs, and smoke tests when restricted data cannot be shared.",
    body: [
      {
        heading: "Restricted data should not make methods invisible",
        paragraphs: [
          "Public-health laboratories often work with clinical, environmental, or operational datasets that cannot be shared openly. That restriction is real, but it should not make the workflow unreviewable. Synthetic data gives a repository a public test path without exposing restricted surveillance material.",
          "A good synthetic dataset does not need to recreate every biological detail. It needs to exercise the logic: input naming, configuration, read parsing, mapping or assembly steps, QC summaries, report generation, and expected failure modes."
        ]
      },
      {
        heading: "What synthetic data should prove",
        points: [
          "The repository can be cloned and checked without private FASTQ files.",
          "The workflow discovers the intended sample names and input paths.",
          "Helper scripts parse realistic file formats and write expected outputs.",
          "Documentation matches the commands a new user can actually run.",
          "Tests catch broken imports, malformed configs, and missing resources early."
        ]
      },
      {
        heading: "Training value",
        paragraphs: [
          "Synthetic inputs are also training materials. A new analyst can run the workflow, inspect the outputs, and learn what normal looks like before touching operational data. That lowers the barrier for capacity building in laboratories where people are learning sequencing and bioinformatics at the same time.",
          "For supervisors, reviewers, and remote employers, synthetic tests are a credibility signal. They show that the repository is more than a code archive: it is a working method that can be evaluated."
        ]
      }
    ],
    references: [
      {
        title: "Ten simple rules for reproducible computational research",
        url: "https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1003285"
      },
      {
        title: "The FAIR Guiding Principles",
        url: "https://www.nature.com/articles/sdata201618"
      },
      {
        title: "Snakemake sustainable data analysis",
        url: "https://f1000research.com/articles/10-33"
      }
    ]
  },
  {
    title: "Whole-capsid poliovirus NGS: QC, consensus, antigenic sites, and phylogeny",
    slug: "whole-capsid-poliovirus-ngs-qc-consensus-antigenic-sites-phylogeny",
    category: "Tutorials",
    date: "2026-05-17",
    minutes: 13,
    tags: ["Poliovirus", "Illumina", "Phylogeny"],
    summary:
      "A workflow-oriented guide to reviewing whole-capsid poliovirus NGS outputs from read QC through antigenic-site summaries and phylogenetic placement.",
    body: [
      {
        heading: "Whole-capsid analysis is a chain of evidence",
        paragraphs: [
          "A whole-capsid poliovirus NGS workflow connects several different kinds of evidence: read quality, primer or adapter handling, reference mapping, depth masking, consensus sequence quality, amino acid changes, and tree placement. Weakness in one part of the chain should be visible in the report.",
          "I prefer to review the workflow in the same order the evidence is generated. That makes it easier to explain why a sample passed, why a consensus is partial, or why a tree placement should be treated cautiously."
        ]
      },
      {
        heading: "QC and consensus review",
        points: [
          "Check paired-read counts, quality trimming, duplicate handling, and mapping rate.",
          "Review depth across the capsid rather than relying only on mean coverage.",
          "Mask low-depth sites and report ambiguous regions clearly.",
          "Compare consensus names, sample metadata, and tree labels before publication.",
          "Keep private reads, BAM files, and sample-identifying metadata outside public repositories."
        ]
      },
      {
        heading: "Antigenic sites and phylogeny",
        paragraphs: [
          "Antigenic-site tables are useful because they translate nucleotide variation into biologically interpretable amino acid changes. They should sit beside, not replace, the consensus and coverage evidence.",
          "Phylogeny adds context: whether sequences cluster as expected, whether sample labels are plausible, and whether the analysis supports the surveillance question. A good public workflow documents the commands and thresholds that connect the raw reads to that final tree."
        ]
      }
    ],
    references: [
      {
        title: "Polio whole-capsid NGS analysis repository",
        url: "https://github.com/adnanhaider81/polio-capsid-ngs-analysis"
      },
      {
        title: "IQ-TREE 2 phylogenetic inference",
        url: "https://academic.oup.com/mbe/article/37/5/1530/5721363"
      },
      {
        title: "BCFtools consensus documentation",
        url: "https://samtools.github.io/bcftools/howtos/consensus-sequence.html"
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

const articleExpansions = {
  "manuscript-to-reproducible-genomics-repository": {
    minutes: 18,
    sections: [
      {
        heading: "How I would audit my own repository",
        paragraphs: [
          "Before sharing a repository publicly, I read it as if I were a collaborator seeing the project for the first time. I ask whether the scientific question is visible before the commands, whether the inputs are described without exposing private data, and whether the outputs are named in a way that a future reader can connect back to the manuscript figure or table.",
          "The most useful audit is not only technical. It also checks whether the repository preserves decision points: why a depth threshold was used, why a reference was selected, why a sequence was excluded, and which step produced the final interpretation. These details are often more important than a long list of tools."
        ]
      },
      {
        heading: "A practical reproducibility standard",
        paragraphs: [
          "For my own genomics work, a repository becomes useful when it can support three readers: the analyst who wants to rerun the workflow, the collaborator who wants to understand the analysis logic, and the trainee who wants to learn the method. The same structure can serve all three if the README, config files, workflow rules, and output guide are written together.",
          "I also separate reproducibility from full data release. Clinical and public-health sequence data may be restricted, but the workflow logic, environment files, synthetic examples, command structure, and citation trail can still be public. That balance keeps the analysis transparent while respecting governance."
        ],
        points: [
          "A repository should include the purpose, not only installation steps.",
          "A dry run should be possible before real compute begins.",
          "Output folders should match the biological interpretation: QC, consensus, trees, mutations, reports.",
          "Restricted data should be represented by templates, synthetic examples, or documented local paths.",
          "Tool citations should be close to the workflow they support."
        ]
      }
    ],
    references: [
      {
        title: "The FAIR Guiding Principles for scientific data management and stewardship",
        url: "https://www.nature.com/articles/sdata201618"
      },
      {
        title: "Ten Simple Rules for Reproducible Computational Research",
        url: "https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1003285"
      },
      {
        title: "Ten Simple Rules for Making Research Software More Robust",
        url: "https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1005412"
      }
    ]
  },
  "culture-free-nanopore-polio-surveillance": {
    minutes: 17,
    sections: [
      {
        heading: "What makes environmental samples difficult",
        paragraphs: [
          "Environmental surveillance samples are not clean clinical isolates. They may contain multiple enteroviruses, degraded RNA, PCR inhibitors, uneven concentration efficiency, and mixtures of closely related sequences. A direct sequencing workflow must therefore be written with uncertainty in mind from the beginning.",
          "For VP1 or capsid-focused work, the first interpretive question is whether the recovered sequence is long enough, specific enough, and clean enough to support a poliovirus interpretation. The second question is whether the sequence supports a public-health conclusion or only a follow-up action."
        ]
      },
      {
        heading: "Controls and thresholds I would not skip",
        paragraphs: [
          "Direct sequencing becomes more convincing when every batch includes negative controls, positive or synthetic controls where appropriate, barcode review, run-yield review, and read-level classification summaries. These checks help separate true weak signal from contamination, carryover, or barcode misassignment.",
          "A useful report should state how many reads supported the target, how the reads were distributed across VP1 or capsid regions, whether the consensus contains ambiguous positions, and whether the same result appears after repeat analysis. The conclusion should be short but the evidence trail should be complete."
        ],
        points: [
          "Record site, date, concentration method, extraction batch, and PCR result.",
          "Keep barcode/sample maps free of patient or site identifiers in public outputs.",
          "Inspect read length and target-region coverage before accepting consensus.",
          "Use cautious language when coverage is partial or controls are borderline."
        ]
      }
    ],
    references: [
      {
        title: "Rapid and sensitive direct detection and identification of poliovirus using nanopore sequencing",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7448630/"
      },
      {
        title: "WHO guidelines for environmental surveillance of poliovirus circulation",
        url: "https://polioeradication.org/wp-content/uploads/2016/07/WHO_V-B_03.03_eng.pdf"
      },
      {
        title: "Wastewater and Environmental Surveillance: summary for Poliovirus",
        url: "https://www.who.int/publications/m/item/wastewater-and-environmental-surveillance--summary-for-poliovirus"
      }
    ]
  },
  "host-subtraction-competitive-mapping": {
    minutes: 18,
    sections: [
      {
        heading: "Why databases shape the answer",
        paragraphs: [
          "Metagenomic interpretation is never independent of the reference database. If close relatives are absent, if assemblies are mislabelled, or if the database overrepresents a well-studied organism, the top hit can look more meaningful than it is. This is why I prefer a second-pass confirmatory mapping step for important signals.",
          "The confirmatory panel should include the suspected organism, close relatives, expected background organisms, and any locally relevant alternatives. The output should not simply say present or absent. It should show whether the reads distribute across the genome and whether they map better to one organism than to plausible competitors."
        ]
      },
      {
        heading: "A reporting structure for uncertain signals",
        paragraphs: [
          "For high-consequence detections, I would separate evidence into three levels. Strong evidence means independent genomic regions, convincing breadth, clean controls, and a plausible sample context. Partial evidence means some target support but not enough for a final claim. Investigation-only evidence means a lead that should trigger follow-up rather than a conclusion.",
          "This style of reporting is slower than naming a top hit, but it is safer. It gives public-health teams a path: repeat extraction, targeted PCR, culture where appropriate, deeper sequencing, or review of sampling and contamination history."
        ],
        points: [
          "Do not rely on read count alone.",
          "Compare breadth of coverage across close alternatives.",
          "Inspect control samples from the same extraction and library batch.",
          "Keep confirmatory assay recommendations next to the metagenomic call."
        ]
      }
    ],
    references: [
      {
        title: "Application of metagenomic next-generation sequencing in the diagnosis of infectious diseases",
        url: "https://www.frontiersin.org/articles/10.3389/fcimb.2024.1458316/full"
      },
      {
        title: "The diagnostic value of metagenomic next-generation sequencing in infectious diseases",
        url: "https://bmcinfectdis.biomedcentral.com/articles/10.1186/s12879-020-05746-5"
      },
      {
        title: "Kraken 2 metagenomic sequence classification",
        url: "https://genomebiology.biomedcentral.com/articles/10.1186/s13059-019-1891-0"
      }
    ]
  },
  "fastq-to-public-health-report": {
    minutes: 18,
    sections: [
      {
        heading: "From files to decisions",
        paragraphs: [
          "The important shift in a surveillance workflow is moving from file production to decision support. A FASTQ file becomes useful only after the workflow can show read quality, trimming behavior, mapping performance, depth, consensus uncertainty, lineage support, and an interpretation that a non-specialist can follow.",
          "I like to design the output folder so it mirrors the conversation I expect to have with a laboratory or response team. First, what was the sample and how good was the run? Second, what genome or region was recovered? Third, what classification or phylogenetic placement is supported? Fourth, what caveats should travel with the result?"
        ]
      },
      {
        heading: "What belongs in the final report",
        paragraphs: [
          "A final public-health genomics report should be concise but not thin. It should include the dataset, tools and versions, reference used, masking threshold, coverage summary, lineage or genotype result, mutation highlights where relevant, and a short interpretation paragraph. The report should also say what was not resolved.",
          "This is where automated outputs and human judgment meet. MultiQC can help reveal batch effects, Nextclade can organize quality flags and mutation calls, Pangolin can support SARS-CoV-2 lineage assignment, and tree-building tools can provide context. None of those outputs should replace the analyst's explanation."
        ],
        points: [
          "Start with QC and sample status before biological interpretation.",
          "Include versioned tool names and reference accessions.",
          "State whether the result is complete genome, partial genome, VP1-only, or target-region limited.",
          "Link interpretation to coverage and metadata rather than to a tree alone."
        ]
      }
    ],
    references: [
      {
        title: "MultiQC: summarize analysis results for multiple tools and samples",
        url: "https://academic.oup.com/bioinformatics/article/32/19/3047/2196507"
      },
      {
        title: "IQ-TREE 2: new models and efficient methods for phylogenetic inference",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7182206/"
      },
      {
        title: "Pangolin SARS-CoV-2 lineage assignment",
        url: "https://github.com/cov-lineages/pangolin"
      }
    ]
  },
  "depth-masking-consensus-genomes": {
    minutes: 17,
    sections: [
      {
        heading: "Primer trimming and masking are connected",
        paragraphs: [
          "Depth masking is often discussed after consensus generation, but the decision begins earlier. Primer trimming, read filtering, duplicate handling, mapping quality, and variant-calling thresholds all affect which positions appear supported. If primers are not handled correctly, false confidence can appear near amplicon edges.",
          "This is one reason amplicon workflows need a primer scheme file, clear trimming steps, and a depth report. When a consensus is used for phylogeny or mutation interpretation, the analyst should be able to explain which positions were called, masked, or ignored."
        ]
      },
      {
        heading: "How I classify sequence usability",
        paragraphs: [
          "Not every consensus has the same use. A high-coverage, low-ambiguity genome can support lineage assignment, tree placement, and mutation summaries. A partial genome may support target confirmation or broad genotype context but not fine-scale transmission inference. A low-depth sequence may belong only in an internal follow-up note.",
          "That classification should be visible. I prefer labels such as pass, review, limited-use, and fail because they communicate confidence without burying the reader in raw tables. The label should always be traceable to depth, breadth, ambiguity, and control performance."
        ],
        points: [
          "Pass: high breadth, adequate depth, clean controls, low ambiguity.",
          "Review: useful sequence with one or more caveats that need manual inspection.",
          "Limited-use: partial evidence suitable only for restricted interpretation.",
          "Fail: insufficient support for genomic interpretation."
        ]
      }
    ],
    references: [
      {
        title: "PrimalSeq and iVar for viral amplicon sequencing",
        url: "https://genomebiology.biomedcentral.com/articles/10.1186/s13059-018-1618-7"
      },
      {
        title: "iVar manual",
        url: "https://andersen-lab.github.io/ivar/html/manualpage.html"
      },
      {
        title: "ViralConsensus consensus genome calling",
        url: "https://academic.oup.com/bioinformatics/article/39/5/btad317/7160909"
      }
    ]
  },
  "amplicon-panels-reference-diversity": {
    minutes: 17,
    sections: [
      {
        heading: "Reference selection is a design decision",
        paragraphs: [
          "A primer panel can fail quietly if the reference set is too narrow. Before designing or adopting a panel, I would inspect whether sequences represent the geography, year range, sample type, and viral diversity relevant to the surveillance setting. A panel designed on distant references may still work, but the risk should be visible.",
          "For segmented viruses, each segment should be treated separately. For enteroviruses and other viruses with important typing regions, the target region should match the public-health question. Whole-genome ambition is useful only when the sample and method can support it."
        ]
      },
      {
        heading: "Validation should include failure modes",
        paragraphs: [
          "A good validation report does not only show beautiful coverage plots. It shows how the panel behaves with low input, degraded material, mixed samples, and controls. It also shows which amplicons drop first, where primer mismatches occur, and which regions remain interpretable when coverage is uneven.",
          "This matters because a field pipeline should fail informatively. When coverage drops, the analyst should know whether the result is unusable, useful for detection only, useful for VP1 or genotype analysis, or strong enough for phylogeny."
        ],
        points: [
          "Inspect mismatch patterns in primer-binding regions.",
          "Evaluate coverage by amplicon, not only total read yield.",
          "Test low-input and degraded samples during validation.",
          "Document known weak regions and expected dropout behavior."
        ]
      }
    ],
    references: [
      {
        title: "ARTIC primer scheme specification",
        url: "https://artic-network.github.io/primerscheme-specs/pdf/primerscheme.pdf"
      },
      {
        title: "Optimization of SARS-CoV-2 ARTIC Network V4 primers and sequencing protocol",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8891481/"
      },
      {
        title: "PrimalSeq and iVar amplicon sequencing framework",
        url: "https://genomebiology.biomedcentral.com/articles/10.1186/s13059-018-1618-7"
      }
    ]
  },
  "nextstrain-routine-outbreak-communication": {
    minutes: 16,
    sections: [
      {
        heading: "A dashboard should have a written question",
        paragraphs: [
          "Before building a Nextstrain or similar dashboard, I write the question in plain language. If the question is lineage surveillance, the metadata and coloring should support lineage interpretation. If the question is local clustering, the contextual dataset must be chosen carefully. If the question is importation, geographic labels and sampling density become central.",
          "Without this discipline, a dashboard can look impressive while saying very little. The visualization should reduce ambiguity for the reader, not add new visual complexity."
        ]
      },
      {
        heading: "Metadata is part of the analysis",
        paragraphs: [
          "A phylogenetic dashboard depends on dates, locations, sample names, lineage fields, and contextual sequence choices. Missing or inconsistent metadata can change the apparent story. For public outputs, metadata also has a governance role: it must be useful without exposing restricted information.",
          "The strongest dashboards pair the tree with a short interpretation note. The note should state what the tree supports, what it does not support, and what follow-up question should be asked next."
        ],
        points: [
          "Choose contextual sequences with a stated rule.",
          "Keep private metadata separate from public display metadata.",
          "Avoid implying direct transmission from tree proximity alone.",
          "Use dashboards as communication products, not as standalone conclusions."
        ]
      }
    ],
    references: [
      {
        title: "TreeTime: maximum-likelihood phylodynamic analysis",
        url: "https://academic.oup.com/ve/article/4/1/vex042/4794731"
      },
      {
        title: "IQ-TREE 2 phylogenetic inference",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7182206/"
      },
      {
        title: "Phylogenetic tree building in the genomic age",
        url: "https://www.nature.com/articles/s41576-020-0233-0"
      }
    ]
  },
  "wastewater-genomics-limits": {
    minutes: 17,
    sections: [
      {
        heading: "Sequencing wastewater is not the same as sequencing a patient sample",
        paragraphs: [
          "A clinical sample usually has one dominant infection context. Wastewater is pooled, diluted, and environmentally processed before it reaches the laboratory. That means a sequencing signal may represent many contributors, uneven shedding, time-lagged material, and variable RNA integrity.",
          "This makes wastewater genomics powerful for population monitoring but difficult for individual-level interpretation. The report should keep that boundary clear. It can support early warning, trend monitoring, and variant detection, but it should not claim exact case counts or transmission chains."
        ]
      },
      {
        heading: "What a wastewater report should include",
        paragraphs: [
          "A useful wastewater genomics report should combine sampling context, assay result, sequencing recovery, target-region coverage, variant or lineage evidence, and caveats. If only partial genomic evidence is available, the report should say so directly and avoid over-specific conclusions.",
          "The best reports also show change over time. A single detection can be important, but repeated signals, rising concentration, or recurring genomic evidence across sampling points are usually more informative for public-health action."
        ],
        points: [
          "State catchment, sampling date, and sampling method.",
          "Separate molecular detection from sequencing interpretation.",
          "Include inhibition, dilution, and coverage caveats.",
          "Use time-series context where available."
        ]
      }
    ],
    references: [
      {
        title: "SARS-CoV-2 wastewater genomic surveillance: approaches, challenges, and opportunities",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12794521/"
      },
      {
        title: "CDC: public health interpretation of wastewater surveillance data",
        url: "https://archive.cdc.gov/www_cdc_gov/nwss/interpretation.html"
      },
      {
        title: "Environmental surveillance of pathogens from wastewater",
        url: "https://www.mdpi.com/2073-4441/14/4/599"
      }
    ]
  },
  "surveillance-pipeline-runbook": {
    minutes: 15,
    sections: [
      {
        heading: "The runbook should reduce ambiguity",
        paragraphs: [
          "A strong runbook is not a long document for its own sake. It is a document that removes uncertainty at the moment an analyst has to make a decision. It should define where inputs live, how sample names are checked, what a normal run looks like, what a failed run looks like, and when a result should be escalated.",
          "The runbook should also be written for handover. If another analyst receives the project months later, they should be able to reconstruct the logic of the run from the commands, logs, versions, config files, and output guide."
        ]
      },
      {
        heading: "Operational details worth recording",
        paragraphs: [
          "In surveillance, small operational details become important later. Database versions, reference accessions, primer schemes, conda environment files, sample sheet revisions, and report templates should be preserved. When a result is questioned, these details are the difference between memory and evidence.",
          "I also like runbooks that include a short troubleshooting section. Common failure modes such as missing FASTQ pairs, mismatched sample IDs, failed controls, low coverage, missing databases, and inconsistent metadata should have a clear first response."
        ],
        points: [
          "Record command logs and software versions.",
          "Store the exact config file used for each run.",
          "Define pass, review, limited-use, and fail rules.",
          "Include a troubleshooting section for common errors."
        ]
      }
    ],
    references: [
      {
        title: "The FAIR Guiding Principles",
        url: "https://www.nature.com/articles/sdata201618"
      },
      {
        title: "Ten Simple Rules for Reproducible Computational Research",
        url: "https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1003285"
      },
      {
        title: "Snakemake sustainable data analysis",
        url: "https://pubmed.ncbi.nlm.nih.gov/34035898/"
      }
    ]
  },
  "how-i-read-genomic-surveillance-repository": {
    minutes: 15,
    sections: [
      {
        heading: "A blog can show judgment that a CV cannot",
        paragraphs: [
          "A CV can list publications, tools, and positions, but a blog can show how someone thinks through a problem. In genomics, that means explaining why a workflow was structured a certain way, where uncertainty enters, which outputs matter, and how a result should be communicated to a public-health audience.",
          "This is why I see technical writing as part of scientific work. A clear article can turn a repository into a teaching resource and a methods note into evidence of applied judgment."
        ]
      },
      {
        heading: "What makes public writing credible",
        paragraphs: [
          "Credible technical writing is specific. It names pathogens, platforms, tools, assumptions, outputs, and limitations. It does not need to oversell. In fact, the strongest writing often becomes more convincing when it names caveats clearly.",
          "For a research blog, consistency also matters. Articles with dates, references, repository links, and practical examples build a record over time. Readers can see both the field of work and the style of thinking."
        ],
        points: [
          "Write from real workflows and real problems.",
          "Use references for methods, tools, and public-health context.",
          "Separate what the data support from what remains uncertain.",
          "Keep repository links close to the articles that explain them."
        ]
      }
    ],
    references: [
      {
        title: "Ten Simple Rules for Effective Computational Research",
        url: "https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1003506"
      },
      {
        title: "The FAIR Guiding Principles for scientific data management",
        url: "https://www.nature.com/articles/sdata201618"
      },
      {
        title: "Ten Simple Rules for Making Research Software More Robust",
        url: "https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1005412"
      }
    ]
  }
};

posts.forEach((post) => {
  const expansion = articleExpansions[post.slug];
  if (!expansion) return;
  post.minutes = expansion.minutes;
  post.body.push(...expansion.sections);
  post.references.push(...expansion.references);
});

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
    title: "RSV Islamabad Manuscript Pipeline",
    slug: "rsv-islamabad-2022-2023-pipeline",
    repo: "https://github.com/adnanhaider81/rsv-islamabad-2022-2023-pipeline",
    updated: "2025-10-02",
    icon: "lungs",
    tags: ["RSV-A", "RSV-B", "Nextclade", "Snakemake"],
    summary:
      "Reference-based RSV-A/RSV-B assembly, depth masking, de novo checks, phylogeny, genotype assignment, and G/F mutation analysis.",
    purpose:
      "Use this for RSV paired-end FASTQs when you need manuscript-style consensus, Nextclade genotype calls, context trees, and amino-acid differences in G and F.",
    prerequisites: ["Python 3.11+", "Conda or mamba", "Snakemake", "NCBI email for Entrez-based steps"],
    commands: [
      "git clone https://github.com/adnanhaider81/rsv-islamabad-2022-2023-pipeline.git",
      "cd rsv-islamabad-2022-2023-pipeline",
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
  "rsv-islamabad-2022-2023-pipeline": {
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

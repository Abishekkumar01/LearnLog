import json, glob, os

dirs = [
    r"c:\Users\iamab\Desktop\LearnLog\Udemy\Python",
    r"c:\Users\iamab\Desktop\LearnLog\Udemy\Python\Data Structure",
    r"c:\Users\iamab\Desktop\LearnLog\Pandas",
    r"c:\Users\iamab\Desktop\LearnLog\practice numpy"
]

for d in dirs:
    print(f"\n--- Directory: {d} ---")
    for filepath in glob.glob(os.path.join(d, "*.ipynb")):
        filename = os.path.basename(filepath)
        print(f"\nNotebook: {filename}")
        try:
            with open(filepath, 'r', encoding='utf-8') as f:
                nb = json.load(f)
                for cell in nb.get('cells', []):
                    if cell['cell_type'] == 'markdown':
                        source = "".join(cell.get('source', []))
                        # print headers or short snippets
                        if source.strip().startswith('#'):
                            print("  " + source.splitlines()[0])
                        elif len(source.strip()) > 0:
                            print(f"  Markdown: {source.strip()[:60]}...")
                    elif cell['cell_type'] == 'code':
                        source = "".join(cell.get('source', []))
                        if source.strip():
                            lines = [line for line in source.splitlines() if line.strip() and not line.strip().startswith('#')]
                            if lines:
                                print(f"  Code: {lines[0][:80]}...")
        except Exception as e:
            print(f"Error reading {filename}: {e}")

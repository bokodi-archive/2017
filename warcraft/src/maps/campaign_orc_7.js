const map = [
    [102,103,108,108,135,103,108,107,103,103,108,107,103,103,108,107,108,242,256,257,256,257,245,107,103,103,108,107,108,107,103,103,108,107,142,107,103,103,108,107,108,73,95,95,95,95,95,95,95,95,95,79,108,107,103,224,225,213,213,213,213,213,213,213,],
    [108,107,135,136,107,103,195,196,197,108,102,103,120,108,102,103,242,257,257,266,257,266,256,245,108,120,102,146,102,194,196,197,197,103,149,126,153,137,120,103,135,72,82,95,81,94,94,82,95,95,95,78,77,103,135,108,211,212,213,213,213,213,213,213,],
    [108,107,103,103,108,207,221,221,222,103,137,103,108,135,136,103,265,266,256,257,246,249,257,266,245,108,107,102,194,221,221,208,209,103,108,107,152,126,153,103,108,102,72,94,80,103,103,73,95,95,95,81,80,107,102,108,211,212,213,213,213,213,213,213,],
    [102,103,108,108,194,220,222,209,209,208,197,195,196,197,102,103,275,266,257,246,261,270,260,249,258,108,102,103,207,209,221,190,193,208,209,197,108,108,152,150,127,107,102,103,112,107,102,72,82,95,95,79,112,103,108,198,199,213,213,213,213,213,213,227,],
    [108,107,102,194,194,209,221,208,208,190,191,222,208,210,107,103,102,275,266,259,261,269,260,249,256,245,107,120,235,222,208,203,218,205,193,209,197,108,107,103,142,103,108,120,102,135,135,102,72,94,94,80,108,137,102,211,212,213,213,213,213,213,214,215,],
    [108,194,194,209,208,209,221,208,221,203,218,191,193,223,108,120,108,107,255,268,270,260,260,261,257,258,108,136,108,107,235,231,218,204,205,209,210,103,146,107,143,107,194,195,196,196,197,107,102,103,103,112,108,107,103,224,225,213,213,213,213,213,214,264,],
    [102,220,221,190,192,193,209,236,237,231,217,217,206,210,108,108,102,103,255,256,260,260,261,282,257,267,108,108,137,103,220,209,231,233,234,222,238,108,108,108,142,194,208,190,193,221,222,103,137,194,196,197,102,103,108,108,211,212,213,213,213,213,214,264,],
    [108,194,216,217,204,205,209,107,103,208,231,233,233,223,102,146,107,103,265,257,279,280,282,256,257,278,102,108,107,103,235,236,237,236,74,77,102,108,102,154,155,207,190,217,204,193,208,195,196,221,221,222,197,107,146,108,211,212,213,213,213,213,214,215,],
    [102,220,231,218,217,219,210,107,135,235,236,237,236,238,108,107,242,243,257,266,256,256,257,277,278,103,135,107,108,107,103,103,108,74,75,79,135,103,154,155,108,220,216,218,217,234,208,209,208,209,209,209,222,108,103,103,224,225,213,213,213,213,213,201,],
    [108,220,208,231,233,234,223,107,103,103,108,108,102,107,242,243,257,266,256,257,276,277,278,107,108,107,103,74,76,77,135,107,74,75,81,80,107,103,142,108,107,235,231,217,234,222,236,237,235,208,209,222,238,103,108,103,103,211,212,213,213,213,213,213,],
    [102,235,236,237,236,237,238,103,137,135,102,103,102,242,257,266,246,249,256,278,108,108,102,103,135,136,74,75,95,78,76,76,75,95,79,112,125,126,151,102,103,102,235,236,237,238,108,107,235,236,237,238,74,77,102,108,108,211,212,213,213,213,213,213,],
    [108,107,102,108,107,103,108,107,102,108,120,103,108,255,266,246,269,249,257,258,102,137,120,135,108,107,72,94,94,94,82,95,95,95,79,108,142,102,108,120,103,108,103,103,108,107,108,135,103,103,108,107,73,78,77,108,198,199,213,213,213,213,213,213,],
    [108,107,103,103,108,107,108,107,103,103,136,107,102,265,266,268,269,270,257,258,103,103,108,107,102,103,102,103,103,103,72,82,95,95,79,102,143,108,108,102,103,108,107,135,135,74,76,77,108,135,74,76,75,95,79,108,211,212,213,213,213,213,213,213,],
    [102,103,108,146,135,103,120,103,108,108,102,103,108,275,266,279,281,282,266,267,108,107,102,108,107,102,108,107,103,103,102,73,95,95,79,108,152,153,108,107,135,136,103,108,74,75,95,78,76,76,75,95,81,94,80,108,211,212,213,213,213,213,213,213,],
    [108,107,102,102,103,103,108,102,103,103,108,102,108,107,265,266,257,257,107,102,108,107,102,102,107,102,102,103,103,107,102,73,95,95,78,77,107,152,153,108,107,108,74,76,75,81,94,94,82,95,95,81,80,103,112,187,274,213,213,213,213,213,213,227,],
    [108,102,113,102,108,102,113,102,108,102,113,102,102,103,275,277,276,277,107,102,102,103,102,107,103,102,107,108,102,102,108,73,95,81,94,80,107,102,142,108,146,102,72,82,81,80,103,103,73,95,95,79,112,103,198,199,200,213,213,213,213,226,227,228,],
    [113,107,107,108,113,107,107,108,113,107,107,108,108,107,102,108,107,103,103,102,107,108,102,74,76,76,76,76,76,76,76,75,81,80,103,112,107,103,143,102,108,107,102,72,80,112,108,107,72,94,94,80,135,107,211,212,213,213,213,213,250,240,241,102,],
    [102,112,112,113,102,112,112,113,102,112,112,113,108,107,102,102,103,103,108,102,74,76,76,75,95,95,95,95,95,81,94,94,80,112,102,187,189,98,99,100,135,108,107,102,112,107,137,103,102,103,103,112,187,188,274,213,213,213,213,227,228,108,103,108,],
    [107,103,107,108,107,103,107,108,107,103,107,108,107,103,102,107,108,74,76,76,75,95,95,95,81,94,94,94,94,80,103,103,112,112,198,199,201,104,105,106,273,188,273,189,108,107,187,188,189,108,107,198,199,200,213,213,213,213,214,215,107,103,103,108,],
    [76,76,76,76,77,108,107,108,107,103,107,108,102,108,102,112,113,72,82,95,81,94,94,94,80,103,103,103,103,112,187,188,189,102,263,229,213,109,110,111,200,200,200,201,188,273,199,200,201,188,273,274,213,213,213,213,213,213,214,215,108,108,108,102,],
    [95,81,94,94,82,77,107,102,108,112,113,107,113,108,107,108,102,102,72,94,80,103,103,103,112,107,187,188,273,188,199,200,201,273,274,213,213,114,115,116,213,213,213,213,200,213,213,213,213,200,213,213,213,213,213,213,213,226,227,228,102,108,107,103,],
    [94,80,103,103,72,80,107,102,108,108,102,112,108,107,103,108,107,103,102,103,112,113,102,108,102,198,199,200,213,213,213,213,213,213,213,213,213,122,123,124,213,213,213,213,213,213,213,213,213,213,213,213,213,213,226,226,227,240,241,103,103,74,76,76,],
    [103,112,135,108,102,112,187,188,189,107,103,102,108,102,108,135,112,103,102,113,187,188,188,189,102,263,213,213,213,213,213,213,213,213,213,226,227,138,139,140,225,226,226,213,213,213,213,213,213,213,213,226,226,227,240,240,241,102,103,103,74,75,95,95,],
    [189,108,108,187,188,188,199,200,201,188,188,189,107,107,187,188,189,107,187,188,199,200,200,201,273,274,213,213,213,213,213,213,226,226,227,240,241,147,97,148,239,240,240,225,226,213,213,213,213,213,250,240,240,241,108,102,108,107,120,107,72,94,82,95,],
    [201,273,188,199,200,200,213,213,213,213,200,201,188,188,199,200,201,188,199,200,213,213,213,213,213,213,213,213,213,213,213,226,250,240,241,103,108,108,142,108,102,103,103,239,240,225,226,226,226,227,228,102,103,103,103,108,107,120,136,103,102,103,73,95,],
    [213,200,200,213,213,213,213,213,213,213,213,253,200,200,213,213,230,200,213,213,213,213,213,213,213,213,213,213,213,213,227,251,241,112,197,107,102,108,142,108,107,107,108,107,102,239,240,240,240,241,108,135,103,108,108,137,103,108,107,135,108,108,73,95,],
    [213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,226,226,227,241,112,197,74,76,77,103,137,152,153,135,103,74,76,77,107,108,107,112,108,112,108,120,103,103,108,107,107,108,107,74,76,75,95,],
    [213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,213,226,226,226,250,251,241,112,74,76,75,95,79,102,108,135,152,153,107,72,82,78,76,76,76,76,76,77,103,135,136,146,103,108,107,136,107,72,82,95,95,],
    [225,226,226,213,213,213,213,226,213,213,213,213,226,226,226,226,226,213,213,213,213,213,213,250,240,251,240,241,103,112,74,75,81,94,82,78,77,102,103,108,142,102,102,72,82,95,81,94,94,82,79,108,102,103,108,108,74,77,102,103,102,73,95,95,],
    [239,240,240,225,226,226,227,240,225,226,226,227,240,240,251,240,240,225,226,226,226,226,227,228,102,194,103,108,74,76,75,95,79,103,72,94,80,108,135,102,165,166,103,102,72,94,80,103,103,72,80,112,108,135,102,74,75,78,76,76,76,75,95,95,],
    [108,107,108,239,240,240,241,108,239,240,240,241,113,103,102,108,107,239,240,240,251,240,241,113,74,76,76,76,75,95,95,95,79,103,102,103,112,102,103,146,108,142,107,108,102,103,112,108,135,102,112,108,102,103,108,73,95,95,95,95,95,81,94,94,],
    [135,103,108,107,103,103,108,120,135,107,112,113,103,235,103,107,103,102,113,103,102,113,113,74,75,95,95,95,95,95,95,81,80,107,102,103,108,108,107,102,108,143,103,102,103,108,120,102,74,77,137,108,74,76,76,75,95,95,95,81,94,80,103,103,],
    [108,74,77,103,108,137,108,136,102,135,108,107,108,107,107,103,108,108,103,107,103,74,76,75,95,95,95,95,81,94,94,80,112,107,135,136,102,135,107,103,154,168,242,243,244,245,136,74,75,78,76,76,75,95,81,94,94,94,94,80,103,112,107,103,],
    [102,73,78,77,102,74,77,108,107,102,108,107,107,103,107,102,103,103,136,108,107,72,94,82,95,95,95,95,79,103,103,112,197,107,103,103,108,102,103,167,155,242,257,246,249,258,103,72,94,94,94,82,95,81,80,103,103,103,103,112,103,103,108,107,],
    [108,72,82,78,76,75,78,77,108,103,103,103,107,102,108,107,103,102,102,108,112,113,102,72,94,94,94,82,79,107,102,194,103,108,120,108,113,108,107,142,108,265,246,269,249,267,108,102,103,103,103,72,94,80,112,108,102,108,107,103,108,137,102,103,],
    [108,102,73,95,95,95,95,79,102,107,102,108,107,102,108,107,103,102,102,103,107,103,103,102,103,103,103,73,78,76,77,221,102,113,103,113,103,108,154,155,103,275,279,281,282,278,103,146,108,135,103,102,103,112,103,103,108,135,108,120,103,103,108,107,],
    [135,136,73,95,95,95,81,80,103,103,107,107,103,107,102,108,107,103,102,108,107,103,108,107,103,102,194,72,94,82,78,77,103,107,102,107,102,103,142,102,108,107,275,277,278,107,108,107,103,135,108,107,108,107,103,74,77,107,108,136,103,103,108,107,],
    [108,74,75,95,81,94,80,112,135,136,107,107,102,108,102,107,103,235,103,107,103,102,102,103,107,102,103,102,103,72,94,80,107,102,108,112,103,108,128,126,150,153,103,108,107,154,126,150,150,153,102,120,102,74,76,75,79,103,102,74,76,77,102,103,],
    [135,72,94,94,80,103,112,103,103,103,108,107,102,107,107,103,108,107,107,103,108,108,103,108,107,103,102,108,107,103,108,112,107,103,107,103,137,108,143,102,103,143,108,102,154,155,108,107,102,152,126,153,108,72,82,95,78,76,76,75,95,78,77,103,],
    [108,102,103,103,112,103,103,187,188,189,102,187,188,189,108,107,107,103,107,102,103,103,102,107,103,235,103,107,103,102,102,103,108,107,103,154,150,126,155,108,107,149,126,150,155,103,108,107,136,103,108,142,102,102,73,95,95,95,95,95,95,81,80,107,],
    [102,103,108,108,102,103,198,199,200,201,188,199,200,201,202,107,107,102,108,107,103,102,107,103,108,107,107,103,108,108,103,103,102,103,107,142,108,107,103,108,135,103,103,108,107,103,102,103,135,136,102,152,153,107,72,94,82,95,81,94,94,80,112,103,],
    [108,107,102,108,107,107,211,212,213,213,200,213,213,214,215,108,107,102,107,103,235,103,107,103,102,102,108,107,103,108,108,103,103,102,154,155,103,102,103,102,103,108,108,135,120,107,108,107,102,108,120,103,142,107,102,103,72,94,80,103,103,112,107,103,],
    [108,135,120,103,108,198,199,213,213,213,213,213,213,213,201,202,108,107,103,108,107,107,103,108,108,103,120,107,74,77,107,108,107,107,142,102,108,107,103,108,242,244,245,107,103,242,243,244,245,103,108,107,143,103,108,135,102,103,112,103,103,103,108,107,],
    [102,103,136,108,108,211,212,213,213,213,213,213,213,213,214,215,107,103,102,102,108,108,108,102,135,102,136,108,73,78,76,77,103,103,143,108,120,108,108,242,256,257,256,243,244,257,246,249,257,245,102,154,155,120,102,108,102,108,146,103,135,136,102,103,],
    [108,107,102,108,102,211,212,213,213,213,213,213,213,213,214,264,103,103,108,107,103,102,74,77,103,135,107,74,75,95,95,78,77,107,165,166,136,102,108,257,246,249,257,257,257,257,259,260,249,258,108,142,108,107,103,103,108,107,108,107,103,103,108,107,],
    [108,107,103,103,242,224,225,213,213,213,213,213,213,250,251,241,102,108,102,103,103,74,75,79,103,137,74,75,95,95,95,81,80,135,108,165,153,108,107,255,268,260,249,256,256,256,279,281,282,267,107,152,153,107,103,154,126,150,126,153,103,103,108,107,],
    [108,107,242,256,257,102,211,212,213,213,213,226,227,228,107,103,103,108,135,74,76,75,95,78,76,76,75,95,81,94,94,80,112,103,102,103,142,102,103,265,279,281,282,256,257,257,257,257,257,278,103,108,152,126,126,155,102,103,102,152,153,108,137,103,],
    [102,103,255,257,266,103,224,225,226,226,227,240,241,108,107,102,108,135,102,72,94,82,95,95,95,95,95,95,79,103,103,112,107,103,108,107,143,108,107,275,257,256,257,276,278,102,275,277,278,108,137,102,108,107,102,108,107,103,108,107,142,108,107,103,],
    [108,107,265,257,256,103,108,239,240,240,241,103,103,108,107,103,107,103,108,102,103,72,94,94,82,95,81,94,80,135,107,102,103,103,108,107,142,102,103,108,275,276,278,108,107,103,103,108,107,102,103,120,102,103,108,108,135,136,108,107,143,103,108,107,],
    [135,103,265,256,257,257,266,257,256,243,244,257,257,266,256,245,102,103,137,108,107,102,103,103,72,94,80,103,112,102,103,108,107,103,102,167,168,120,107,102,108,107,103,108,107,102,137,107,103,108,107,103,74,77,102,108,107,103,102,103,149,126,153,103,],
    [108,107,275,257,256,256,257,256,257,266,257,256,246,249,256,258,108,107,102,103,108,102,135,108,102,103,112,103,120,107,135,103,154,126,150,155,102,108,107,135,103,108,136,102,120,103,103,108,108,102,103,74,75,79,103,103,120,107,108,107,102,108,152,126,],
    [108,107,103,103,276,277,266,257,266,256,257,246,261,249,256,267,102,103,120,107,102,108,107,102,108,146,102,107,102,103,125,126,155,108,102,103,103,102,103,108,108,108,108,107,103,146,108,108,108,108,102,73,95,78,77,108,108,108,135,103,135,103,108,107,],
    [102,146,108,108,108,108,255,257,257,256,257,279,281,282,257,278,108,107,136,108,102,194,195,196,197,108,102,103,136,154,155,108,102,108,107,136,108,108,107,194,195,196,197,108,107,108,108,108,103,103,108,73,95,95,78,77,102,108,107,137,108,108,102,103,],
    [108,107,102,137,102,108,265,266,256,257,266,256,257,256,267,108,108,107,103,103,194,221,222,221,222,103,108,107,108,142,103,103,108,103,107,103,103,137,194,208,190,191,192,209,103,108,103,103,103,108,74,75,95,95,95,79,108,107,108,107,103,103,146,107,],
    [108,120,103,103,108,242,257,257,257,266,276,276,277,277,278,108,107,135,107,194,209,222,190,193,209,208,197,103,108,143,103,103,135,102,103,108,108,102,207,221,216,218,219,208,197,108,102,74,76,76,84,94,94,82,95,78,77,107,108,74,76,77,108,107,],
    [108,107,103,103,242,257,247,247,249,258,108,107,108,107,103,103,146,107,108,207,222,190,205,204,193,221,210,103,108,142,108,107,102,108,107,102,108,107,220,208,231,232,234,208,210,103,108,72,94,94,80,103,103,72,82,95,78,76,76,75,95,78,77,103,],
    [102,103,108,108,255,246,269,270,249,258,102,135,136,103,108,108,102,103,102,220,209,216,205,205,219,208,223,108,102,152,153,103,108,102,103,108,195,196,208,221,209,208,208,221,223,108,107,102,103,103,112,108,107,102,73,95,95,95,95,95,95,95,79,103,],
    [108,107,102,108,265,279,270,269,270,267,107,103,108,107,194,196,197,103,108,207,208,231,218,218,234,221,222,108,107,103,143,107,102,120,107,194,209,221,190,193,209,208,221,208,209,108,107,102,120,107,108,120,107,102,73,95,95,95,95,95,95,81,80,107,],
    [102,103,108,108,275,256,279,281,282,278,108,107,102,194,209,221,222,195,196,209,221,222,222,221,236,237,238,108,102,103,165,166,108,136,107,207,222,190,205,218,221,208,209,209,208,195,196,197,108,102,102,102,103,136,73,95,95,95,81,94,94,80,112,103,],
    [77,107,135,108,107,275,276,277,278,108,102,103,108,207,222,208,190,192,193,208,209,221,222,103,108,107,102,108,107,103,102,142,108,102,103,208,209,216,218,219,209,236,237,222,221,222,221,208,197,107,108,108,135,102,73,95,95,81,80,103,103,112,135,103,],
    [78,77,103,103,108,107,108,107,102,108,107,137,108,220,209,190,217,204,205,221,208,208,210,103,108,107,137,103,136,107,108,143,102,108,107,221,222,231,218,234,222,108,102,208,209,209,209,208,223,135,136,108,107,103,72,94,94,80,112,102,146,107,136,107,],
    [95,79,135,108,108,135,102,103,135,146,108,107,102,235,208,231,218,217,206,209,208,209,223,107,102,103,120,108,154,150,126,155,108,108,107,235,221,208,209,221,238,135,108,235,222,209,222,221,238,108,102,102,137,108,102,103,103,112,103,103,103,108,107,103,],
    [95,78,77,108,102,108,107,135,136,108,102,103,108,107,220,222,231,217,219,208,209,222,102,103,108,107,102,154,155,108,107,103,108,107,135,108,235,236,237,238,108,107,108,107,236,237,238,102,108,102,146,108,107,102,108,102,108,107,103,137,108,102,103,107,],
    [95,95,78,76,77,107,108,107,103,103,136,107,108,107,235,236,221,222,221,221,222,238,108,107,108,107,103,142,108,107,108,107,103,103,108,108,107,103,103,108,107,108,107,103,103,108,107,103,103,108,108,108,107,103,103,108,107,108,107,103,103,108,107,103,],
];

export default map;
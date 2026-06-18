const canvas = document.querySelector("#builderCanvas");
const ctx = canvas.getContext("2d");

const els = {
  startModal: document.querySelector("#startModal"),
  closeStartModal: document.querySelector("#closeStartModal"),
  startAutoBtn: document.querySelector("#startAutoBtn"),
  startManualBtn: document.querySelector("#startManualBtn"),
  startEditBtn: document.querySelector("#startEditBtn"),
  startNamesBtn: document.querySelector("#startNamesBtn"),
  fileInput: document.querySelector("#fileInput"),
  serviceMode: document.querySelector("#serviceMode"),
  sublimationOptions: document.querySelector("#sublimationOptions"),
  epsonOptions: document.querySelector("#epsonOptions"),
  a4MultiSheet: document.querySelector("#a4MultiSheet"),
  mugNesting: document.querySelector("#mugNesting"),
  a4Mirror: document.querySelector("#a4Mirror"),
  mugDesignQty: document.querySelector("#mugDesignQty"),
  a4SheetCopies: document.querySelector("#a4SheetCopies"),
  mugPresetBtn: document.querySelector("#mugPresetBtn"),
  applyMugQtyBtn: document.querySelector("#applyMugQtyBtn"),
  a4NestBtn: document.querySelector("#a4NestBtn"),
  paperWidth: document.querySelector("#paperWidth"),
  sublimationRequest: document.querySelector("#sublimationRequest"),
  fabricSource: document.querySelector("#fabricSource"),
  fabricType: document.querySelector("#fabricType"),
  sheetWidth: document.querySelector("#sheetWidth"),
  sheetHeight: document.querySelector("#sheetHeight"),
  zoom: document.querySelector("#zoom"),
  snapToggle: document.querySelector("#snapToggle"),
  marginToggle: document.querySelector("#marginToggle"),
  itemSpacing: document.querySelector("#itemSpacing"),
  nestMode: document.querySelector("#nestMode"),
  nestMargin: document.querySelector("#nestMargin"),
  nestSort: document.querySelector("#nestSort"),
  nestRotate: document.querySelector("#nestRotate"),
  nestCompact: document.querySelector("#nestCompact"),
  toolbarSpacing: document.querySelector("#toolbarSpacing"),
  toolbarZoom: document.querySelector("#toolbarZoom"),
  horizontalRuler: document.querySelector("#horizontalRuler"),
  verticalRuler: document.querySelector("#verticalRuler"),
  toolUndoBtn: document.querySelector("#toolUndoBtn"),
  toolRedoBtn: document.querySelector("#toolRedoBtn"),
  toolUploadBtn: document.querySelector("#toolUploadBtn"),
  toolTextBtn: document.querySelector("#toolTextBtn"),
  toolCropBtn: document.querySelector("#toolCropBtn"),
  toolRotateBtn: document.querySelector("#toolRotateBtn"),
  toolDuplicateBtn: document.querySelector("#toolDuplicateBtn"),
  toolDeleteBtn: document.querySelector("#toolDeleteBtn"),
  toolAutoBtn: document.querySelector("#toolAutoBtn"),
  customerName: document.querySelector("#customerName"),
  customerPhone: document.querySelector("#customerPhone"),
  customerNotes: document.querySelector("#customerNotes"),
  textInput: document.querySelector("#textInput"),
  textWidth: document.querySelector("#textWidth"),
  textObjectHeight: document.querySelector("#textObjectHeight"),
  textX: document.querySelector("#textX"),
  textY: document.querySelector("#textY"),
  lockTextRatio: document.querySelector("#lockTextRatio"),
  textDuplicateBtn: document.querySelector("#textDuplicateBtn"),
  textQuantityBtn: document.querySelector("#textQuantityBtn"),
  textFontFamily: document.querySelector("#textFontFamily"),
  textFontSize: document.querySelector("#textFontSize"),
  textColorHex: document.querySelector("#textColorHex"),
  textColor: document.querySelector("#textColor"),
  textStrokeEnabled: document.querySelector("#textStrokeEnabled"),
  textStrokeWidth: document.querySelector("#textStrokeWidth"),
  textStrokeColorHex: document.querySelector("#textStrokeColorHex"),
  textStrokeColor: document.querySelector("#textStrokeColor"),
  textBoldBtn: document.querySelector("#textBoldBtn"),
  textUnderlineBtn: document.querySelector("#textUnderlineBtn"),
  textStrikeBtn: document.querySelector("#textStrikeBtn"),
  textItalicBtn: document.querySelector("#textItalicBtn"),
  textUpperBtn: document.querySelector("#textUpperBtn"),
  textLowerBtn: document.querySelector("#textLowerBtn"),
  textAlignLeftBtn: document.querySelector("#textAlignLeftBtn"),
  textAlignCenterBtn: document.querySelector("#textAlignCenterBtn"),
  textAlignRightBtn: document.querySelector("#textAlignRightBtn"),
  addTextBtn: document.querySelector("#addTextBtn"),
  itemWidth: document.querySelector("#itemWidth"),
  itemQty: document.querySelector("#itemQty"),
  namesDetails: document.querySelector("#namesDetails"),
  numbersDetails: document.querySelector("#numbersDetails"),
  namesCountLabel: document.querySelector("#namesCountLabel"),
  numbersCountLabel: document.querySelector("#numbersCountLabel"),
  namesSummary: document.querySelector("#namesSummary"),
  numbersSummary: document.querySelector("#numbersSummary"),
  namesColorChip: document.querySelector("#namesColorChip"),
  numbersColorChip: document.querySelector("#numbersColorChip"),
  namesSize: document.querySelector("#namesSize"),
  numbersSize: document.querySelector("#numbersSize"),
  namesFont: document.querySelector("#namesFont"),
  numbersFont: document.querySelector("#numbersFont"),
  namesStrokeWidth: document.querySelector("#namesStrokeWidth"),
  numbersStrokeWidth: document.querySelector("#numbersStrokeWidth"),
  namesUseTextColor: document.querySelector("#namesUseTextColor"),
  numbersUseTextColor: document.querySelector("#numbersUseTextColor"),
  namesUseStroke: document.querySelector("#namesUseStroke"),
  numbersUseStroke: document.querySelector("#numbersUseStroke"),
  namesTextColorHex: document.querySelector("#namesTextColorHex"),
  numbersTextColorHex: document.querySelector("#numbersTextColorHex"),
  namesTextColor: document.querySelector("#namesTextColor"),
  numbersTextColor: document.querySelector("#numbersTextColor"),
  namesStrokeColorHex: document.querySelector("#namesStrokeColorHex"),
  numbersStrokeColorHex: document.querySelector("#numbersStrokeColorHex"),
  namesStrokeColor: document.querySelector("#namesStrokeColor"),
  numbersStrokeColor: document.querySelector("#numbersStrokeColor"),
  namesEntryText: document.querySelector("#namesEntryText"),
  numbersEntryText: document.querySelector("#numbersEntryText"),
  namesEntryQty: document.querySelector("#namesEntryQty"),
  numbersEntryQty: document.querySelector("#numbersEntryQty"),
  addNameEntryBtn: document.querySelector("#addNameEntryBtn"),
  addNumberEntryBtn: document.querySelector("#addNumberEntryBtn"),
  reviewBtn: document.querySelector("#reviewBtn"),
  centerSelectedBtn: document.querySelector("#centerSelectedBtn"),
  fitHeightBtn: document.querySelector("#fitHeightBtn"),
  clearSheetBtn: document.querySelector("#clearSheetBtn"),
  preflightList: document.querySelector("#preflightList"),
  itemList: document.querySelector("#itemList"),
  pricePerCm: document.querySelector("#pricePerCm"),
  exportDpi: document.querySelector("#exportDpi"),
  duplicateBtn: document.querySelector("#duplicateBtn"),
  deleteBtn: document.querySelector("#deleteBtn"),
  cropBtn: document.querySelector("#cropBtn"),
  applySizeBtn: document.querySelector("#applySizeBtn"),
  rotateBtn: document.querySelector("#rotateBtn"),
  autoArrangeBtn: document.querySelector("#autoArrangeBtn"),
  exportPngBtn: document.querySelector("#exportPngBtn"),
  exportPdfBtn: document.querySelector("#exportPdfBtn"),
  exportOrderBtn: document.querySelector("#exportOrderBtn"),
  copyOrderBtn: document.querySelector("#copyOrderBtn"),
  whatsappOrderBtn: document.querySelector("#whatsappOrderBtn"),
  selectedInfo: document.querySelector("#selectedInfo"),
  sheetInfo: document.querySelector("#sheetInfo"),
  usedHeight: document.querySelector("#usedHeight"),
  pieceCount: document.querySelector("#pieceCount"),
  totalPrice: document.querySelector("#totalPrice"),
  productionStatus: document.querySelector("#productionStatus"),
  sheetPages: document.querySelector("#sheetPages"),
  emptyState: document.querySelector("#emptyState"),
  uploadNotice: document.querySelector("#uploadNotice"),
};

const state = {
  items: [],
  selectedId: null,
  drag: null,
  nextId: 1,
  nextGroupId: 1,
  history: [],
  future: [],
  restoring: false,
  activePoint: null,
  uploadMode: "auto",
  mugPresetActive: false,
};

const MIN_SHEET_HEIGHT = 40;
const MAX_SHEET_HEIGHT = 600;
const AUTO_HEIGHT_PADDING = 1.2;
const A4_WIDTH_CM = 21;
const A4_HEIGHT_CM = 29.7;
const MUG_WRAP_WIDTH_CM = 20;
const MUG_WRAP_HEIGHT_CM = 9;
const MUGS_PER_A4 = 3;
const PRODUCTION_DPI = 300;
const UI_ACCENT = "#26aee4";
const UI_WARN = "#f06a3d";

function sheet() {
  const maxPrintWidth = configuredPrintWidth();
  const width = Math.min(Number(els.sheetWidth.value) || maxPrintWidth, maxPrintWidth);
  if (Number(els.sheetWidth.value) !== width) {
    els.sheetWidth.value = width;
  }
  const rawHeight = Number(els.sheetHeight.value) || (isA4Mode() ? A4_HEIGHT_CM : MIN_SHEET_HEIGHT);
  const minHeight = isA4Mode() ? A4_HEIGHT_CM : 30;
  let height = Math.max(minHeight, Math.min(rawHeight, MAX_SHEET_HEIGHT));
  if (isA4Mode()) {
    height = a4MultiEnabled() ? a4HeightForContent(height) : A4_HEIGHT_CM;
  }
  if (Number(els.sheetHeight.value) !== height) {
    els.sheetHeight.value = formatCm(height);
  }
  return {
    width,
    height,
    zoom: Number(els.zoom.value) || 18,
  };
}

function configuredPrintWidth() {
  if (isA4Mode()) return A4_WIDTH_CM;
  return serviceMode() === "sublimation" ? Number(els.paperWidth.value) || 110 : 57;
}

function serviceMode() {
  return els.serviceMode.value;
}

function isA4Mode() {
  return serviceMode() === "epson_a4";
}

function a4MultiEnabled() {
  return !isA4Mode() || els.a4MultiSheet.checked;
}

function mugNestingEnabled() {
  return isA4Mode() && els.mugNesting.checked;
}

function a4MirrorEnabled() {
  return isA4Mode() && els.a4Mirror.checked;
}

function a4MirrorSuffix() {
  return a4MirrorEnabled() ? "-espejo" : "";
}

function a4SheetCopies() {
  return Math.max(1, Math.min(Number(els.a4SheetCopies.value) || 1, 100));
}

function serviceLabel() {
  if (isA4Mode()) return "Sublimacion A4 - Epson F170";
  return serviceMode() === "sublimation" ? "Sublimacion" : "DTF";
}

function defaultZoomForService() {
  if (isA4Mode()) return 18;
  return serviceMode() === "sublimation" ? 8 : 18;
}

function formatCm(value) {
  return Number.isInteger(value) ? String(value) : value.toFixed(1);
}

function a4PageCount(height = sheet().height) {
  const maxPages = Math.floor(MAX_SHEET_HEIGHT / A4_HEIGHT_CM);
  return Math.min(maxPages, Math.max(1, Math.ceil(height / A4_HEIGHT_CM)));
}

function a4HeightForContent(height) {
  return a4PageCount(height) * A4_HEIGHT_CM;
}

function pixelsPerCm() {
  return sheet().zoom;
}

function resizeCanvas() {
  const s = sheet();
  canvas.width = Math.round(s.width * s.zoom);
  canvas.height = Math.round(s.height * s.zoom);
  els.sheetInfo.textContent = `${serviceLabel()} - ${s.width} x ${s.height} cm`;
  els.toolbarZoom.value = String(Math.round((s.zoom / defaultZoomForService()) * 100));
  renderRulers(s);
}

function drawGrid(s) {
  const unit = s.zoom;
  ctx.save();
  ctx.strokeStyle = "#e4f3fb";
  ctx.lineWidth = 1;
  for (let x = 0; x <= canvas.width; x += unit) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, canvas.height);
    ctx.stroke();
  }
  for (let y = 0; y <= canvas.height; y += unit) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(canvas.width, y);
    ctx.stroke();
  }
  ctx.strokeStyle = UI_WARN;
  ctx.setLineDash([8, 7]);
  const margin = 0.6 * unit;
  if (els.marginToggle.checked) {
    ctx.strokeRect(margin, margin, canvas.width - margin * 2, canvas.height - margin * 2);
  }
  drawA4PageGuides(s);
  ctx.restore();
}

function drawA4PageGuides(s) {
  if (!isA4Mode()) return;
  const pageHeight = A4_HEIGHT_CM * s.zoom;
  const pages = a4PageCount(s.height);
  ctx.save();
  ctx.strokeStyle = "#087fb2";
  ctx.fillStyle = "#087fb2";
  ctx.font = "800 12px system-ui, sans-serif";
  ctx.textBaseline = "top";
  for (let page = 0; page < pages; page += 1) {
    const y = Math.round(page * pageHeight);
    if (page > 0) {
      ctx.setLineDash([10, 8]);
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.stroke();
    }
    ctx.setLineDash([]);
    ctx.fillText(`A4 hoja ${page + 1}${a4MirrorEnabled() ? " - espejo activo" : ""}`, 8, y + 8);
  }
  ctx.restore();
}

function drawCheckerboard(s) {
  const tile = Math.max(8, Math.round(s.zoom / 2));
  ctx.save();
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#e8f5fb";
  for (let y = 0; y < canvas.height; y += tile) {
    for (let x = 0; x < canvas.width; x += tile) {
      if ((x / tile + y / tile) % 2 === 0) {
        ctx.fillRect(x, y, tile, tile);
      }
    }
  }
  ctx.restore();
}

function renderRulers(s) {
  renderRuler(els.horizontalRuler, s.width, s.zoom, "horizontal");
  renderRuler(els.verticalRuler, s.height, s.zoom, "vertical");
}

function renderRuler(target, lengthCm, scale, direction) {
  target.replaceChildren();
  const sizePx = Math.round(lengthCm * scale);
  target.style.width = direction === "horizontal" ? `${sizePx}px` : "44px";
  target.style.height = direction === "vertical" ? `${sizePx}px` : "28px";
  const labelStep = lengthCm > 120 ? 10 : 5;

  for (let cm = 0; cm <= lengthCm; cm += 1) {
    const pos = Math.round(cm * scale);
    const mark = document.createElement("span");
    mark.className = "ruler-mark";
    const isMajor = cm % labelStep === 0;
    const isHalf = cm % 5 === 0;
    const markLength = isMajor ? 16 : isHalf ? 10 : 6;
    if (direction === "horizontal") {
      mark.style.left = `${pos}px`;
      mark.style.height = `${markLength}px`;
    } else {
      mark.style.top = `${pos}px`;
      mark.style.width = `${markLength}px`;
    }
    target.append(mark);

    if (isMajor) {
      const label = document.createElement("span");
      label.className = "ruler-label";
      label.textContent = String(cm);
      if (direction === "horizontal") {
        label.style.left = `${pos}px`;
      } else {
        label.style.top = `${pos}px`;
      }
      target.append(label);
    }
  }
}

function drawItem(item) {
  const scale = pixelsPerCm();
  const w = item.w * scale;
  const h = item.h * scale;
  const cx = item.x * scale + w / 2;
  const cy = item.y * scale + h / 2;
  const rotatedSideways = item.rotation % 180 !== 0;
  const drawW = rotatedSideways ? h : w;
  const drawH = rotatedSideways ? w : h;

  ctx.save();
  ctx.translate(cx, cy);
  ctx.rotate((item.rotation * Math.PI) / 180);
  if (item.type === "text") {
    drawTextObject(ctx, item, drawW, drawH, pixelsPerCm());
  } else if (item.image) {
    ctx.drawImage(item.image, -drawW / 2, -drawH / 2, drawW, drawH);
  } else {
    drawFilePlaceholder(ctx, item, drawW, drawH);
  }
  ctx.restore();

  ctx.save();
  ctx.strokeStyle = item.id === state.selectedId ? UI_ACCENT : "rgba(20, 48, 68, 0.2)";
  ctx.lineWidth = item.id === state.selectedId ? 3 : 1;
  ctx.strokeRect(item.x * scale, item.y * scale, w, h);
  if (item.id === state.selectedId) {
    ctx.fillStyle = UI_ACCENT;
    ctx.fillRect((item.x + item.w) * scale - 10, (item.y + item.h) * scale - 10, 20, 20);
  }
  ctx.restore();
}

function drawProductionItem(targetCtx, item, scale) {
  const w = item.w * scale;
  const h = item.h * scale;
  const cx = item.x * scale + w / 2;
  const cy = item.y * scale + h / 2;
  const rotatedSideways = item.rotation % 180 !== 0;
  const drawW = rotatedSideways ? h : w;
  const drawH = rotatedSideways ? w : h;

  targetCtx.save();
  targetCtx.translate(cx, cy);
  targetCtx.rotate((item.rotation * Math.PI) / 180);
  if (item.type === "text") {
    drawTextObject(targetCtx, item, drawW, drawH, scale);
  } else if (item.image) {
    targetCtx.drawImage(item.image, -drawW / 2, -drawH / 2, drawW, drawH);
  }
  targetCtx.restore();
}

function drawTextObject(targetCtx, item, w, h, scale) {
  const text = item.text || "";
  if (!text) return;
  const fontPx = Math.max(10, Math.min(h * 0.78, Number(item.fontSize) || h * 0.78));
  const fontWeight = item.bold ? "800" : "400";
  const fontStyle = item.italic ? "italic" : "normal";
  const family = item.fontFamily || "Arial, Helvetica, sans-serif";
  const textToDraw = item.uppercase ? text.toUpperCase() : item.lowercase ? text.toLowerCase() : text;
  const lines = textToDraw.split(/\r?\n/);
  const lineHeight = fontPx * 1.14;
  const totalTextHeight = lineHeight * lines.length;
  const padding = Math.max(4, fontPx * 0.08);
  const align = item.align || "left";
  const x = align === "center" ? 0 : align === "right" ? w / 2 - padding : -w / 2 + padding;
  const startY = -totalTextHeight / 2 + lineHeight / 2;
  const fillEnabled = item.fillEnabled !== false;
  const strokeEnabled = Boolean(item.strokeEnabled && Number(item.strokeWidth) > 0);
  const strokePx = Math.max(1, fontPx * ((Number(item.strokeWidth) || 0) / 100));
  const fillColor = item.color || "#000000";
  const strokeColor = item.strokeColor || "#ffffff";

  targetCtx.save();
  targetCtx.textAlign = align;
  targetCtx.textBaseline = "middle";
  targetCtx.font = `${fontStyle} ${fontWeight} ${fontPx}px ${family}`;
  targetCtx.lineJoin = "round";
  targetCtx.miterLimit = 2;
  targetCtx.fillStyle = fillColor;
  targetCtx.strokeStyle = strokeColor;
  targetCtx.lineWidth = strokePx;

  lines.forEach((line, index) => {
    const y = startY + index * lineHeight;
    targetCtx.strokeStyle = strokeColor;
    targetCtx.lineWidth = strokePx;
    if (strokeEnabled) targetCtx.strokeText(line, x, y, Math.max(1, w - padding * 2));
    if (fillEnabled) targetCtx.fillText(line, x, y, Math.max(1, w - padding * 2));
    const measured = Math.min(targetCtx.measureText(line).width, Math.max(1, w - padding * 2));
    const lineLeft = align === "center" ? -measured / 2 : align === "right" ? x - measured : x;
    const lineRight = lineLeft + measured;
    if (item.underline) {
      targetCtx.strokeStyle = fillEnabled ? fillColor : strokeColor;
      targetCtx.lineWidth = Math.max(1, fontPx * 0.045);
      targetCtx.beginPath();
      targetCtx.moveTo(lineLeft, y + fontPx * 0.42);
      targetCtx.lineTo(lineRight, y + fontPx * 0.42);
      targetCtx.stroke();
    }
    if (item.strike) {
      targetCtx.strokeStyle = fillEnabled ? fillColor : strokeColor;
      targetCtx.lineWidth = Math.max(1, fontPx * 0.045);
      targetCtx.beginPath();
      targetCtx.moveTo(lineLeft, y - fontPx * 0.05);
      targetCtx.lineTo(lineRight, y - fontPx * 0.05);
      targetCtx.stroke();
    }
  });
  targetCtx.restore();
}

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function defaultTextPoints() {
  return { tl: -1.2, tr: -1.2, bl: 1.2, br: 1.2 };
}

function textPointPositions(item) {
  const points = item.points || defaultTextPoints();
  return {
    tl: { x: item.x, y: item.y + points.tl },
    tr: { x: item.x + item.w, y: item.y + points.tr },
    bl: { x: item.x, y: item.y + item.h + points.bl },
    br: { x: item.x + item.w, y: item.y + item.h + points.br },
  };
}

function drawTextPointHandles(targetCtx, item, scale) {
  const handles = textPointPositions(item);
  targetCtx.save();
  targetCtx.fillStyle = "#2b6adf";
  targetCtx.strokeStyle = "#ffffff";
  Object.values(handles).forEach((point) => {
    targetCtx.beginPath();
    targetCtx.arc(point.x * scale, point.y * scale, 6, 0, Math.PI * 2);
    targetCtx.fill();
    targetCtx.stroke();
  });
  targetCtx.restore();
}

function drawFilePlaceholder(targetCtx, item, w, h) {
  targetCtx.fillStyle = "#fff7f2";
  targetCtx.fillRect(-w / 2, -h / 2, w, h);
  targetCtx.strokeStyle = "#e15b3d";
  targetCtx.setLineDash([8, 6]);
  targetCtx.strokeRect(-w / 2 + 8, -h / 2 + 8, Math.max(0, w - 16), Math.max(0, h - 16));
  targetCtx.setLineDash([]);

  targetCtx.fillStyle = "#873923";
  targetCtx.textAlign = "center";
  targetCtx.textBaseline = "middle";
  targetCtx.font = "800 18px system-ui, sans-serif";
  targetCtx.fillText(item.fileType.toUpperCase(), 0, -12);
  targetCtx.font = "700 11px system-ui, sans-serif";
  targetCtx.fillText("requiere conversion", 0, 12);
}

function render() {
  expandSheetToContent();
  resizeCanvas();
  const s = sheet();
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawCheckerboard(s);
  drawGrid(s);
  state.items.forEach(drawItem);
  updateSummary();
  saveDraft();
}

function selectedItem() {
  return state.items.find((item) => item.id === state.selectedId);
}

function selectedTextItem() {
  const item = selectedItem();
  return item?.type === "text" ? item : null;
}

function cloneItems(items) {
  return items.map((item) => ({ ...item, points: item.points ? { ...item.points } : undefined }));
}

function serializableItems() {
  return state.items.map((item) => ({
    ...item,
    image: null,
    imageMissing: Boolean(item.image),
  }));
}

function saveDraft() {
  if (state.restoring) return;
  const draft = {
    items: serializableItems(),
    selectedId: state.selectedId,
    nextId: state.nextId,
    nextGroupId: state.nextGroupId,
    sheetWidth: els.sheetWidth.value,
    sheetHeight: els.sheetHeight.value,
    serviceMode: els.serviceMode.value,
    savedAt: new Date().toISOString(),
  };
  localStorage.setItem("printBuilderDraft", JSON.stringify(draft));
}

function restoreDraft() {
  const raw = localStorage.getItem("printBuilderDraft");
  if (!raw) {
    window.alert("No hay un borrador guardado en este dispositivo.");
    return false;
  }
  const draft = JSON.parse(raw);
  state.restoring = true;
  state.items = (draft.items || []).map((item) => ({
    ...item,
    image: null,
    requiresConversion: item.requiresConversion || item.imageMissing || false,
  }));
  state.selectedId = draft.selectedId ?? null;
  state.nextId = draft.nextId || state.items.length + 1;
  state.nextGroupId = draft.nextGroupId || state.items.length + 1;
  els.sheetWidth.value = draft.sheetWidth || els.sheetWidth.value;
  els.sheetHeight.value = draft.sheetHeight || els.sheetHeight.value;
  els.serviceMode.value = draft.serviceMode || els.serviceMode.value;
  state.restoring = false;
  applyServiceSettings();
  render();
  return true;
}

function saveHistory() {
  if (state.restoring) return;
  state.history.push({ items: cloneItems(state.items), selectedId: state.selectedId });
  if (state.history.length > 40) state.history.shift();
  state.future = [];
}

function restoreSnapshot(snapshot) {
  state.restoring = true;
  state.items = cloneItems(snapshot.items);
  state.selectedId = snapshot.selectedId;
  state.restoring = false;
  render();
}

function undo() {
  if (!state.history.length) return;
  state.future.push({ items: cloneItems(state.items), selectedId: state.selectedId });
  restoreSnapshot(state.history.pop());
}

function redo() {
  if (!state.future.length) return;
  state.history.push({ items: cloneItems(state.items), selectedId: state.selectedId });
  restoreSnapshot(state.future.pop());
}

function updateSummary() {
  const selected = selectedItem();
  els.selectedInfo.textContent = selected
    ? `${selected.name}: ${selected.w.toFixed(1)} x ${selected.h.toFixed(1)} cm${selected.requiresConversion ? " - requiere conversion" : ""}`
    : "Sin seleccion";
  els.emptyState.hidden = state.items.length > 0;

  const used = state.items.reduce((max, item) => Math.max(max, item.y + item.h), 0);
  const printableUsed = Math.min(used, sheet().height);
  const price = printableUsed * (Number(els.pricePerCm.value) || 0);
  els.usedHeight.textContent = `${printableUsed.toFixed(1)} cm`;
  els.pieceCount.textContent = String(state.items.length);
  els.totalPrice.textContent = formatMoney(price);
  els.productionStatus.textContent = productionStatusText();
  if (isA4Mode()) {
    const pages = a4PageCount(sheet().height);
    const copies = a4SheetCopies();
    els.sheetPages.textContent = `${pages} hoja(s) x ${copies} = ${pages * copies}`;
  } else {
    els.sheetPages.textContent = "-";
  }
  renderItemList();
  renderPreflight();
  updateRosterSummary();
}

function formatMoney(value) {
  return `Q${value.toFixed(2)}`;
}

function productionStatusText() {
  if (!state.items.length) return "Vacio";
  if (state.items.some((item) => item.requiresConversion)) return "Revisar archivos";
  if (reviewIssues().some((issue) => issue.level === "error")) return "Revisar medidas";
  if (needsFabricConfirmation()) return "Confirmar tela";
  return "Listo";
}

function renderItemList() {
  if (!els.itemList) return;
  els.itemList.replaceChildren();
  if (!state.items.length) {
    const empty = document.createElement("p");
    empty.className = "empty-list";
    empty.textContent = "Todavia no hay piezas en la hoja.";
    els.itemList.append(empty);
    return;
  }

  state.items.forEach((item, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `item-row${item.id === state.selectedId ? " is-selected" : ""}`;
    button.dataset.itemId = String(item.id);

    const title = document.createElement("strong");
    title.textContent = `${index + 1}. ${item.name || "pieza"}`;
    const meta = document.createElement("span");
    meta.textContent = `${item.w.toFixed(1)} x ${item.h.toFixed(1)} cm - ${itemStatusText(item)}`;
    const badge = document.createElement("i");
    badge.className = `item-badge ${itemStatusLevel(item)}`;
    badge.textContent = itemStatusShort(item);

    button.append(title, meta, badge);
    els.itemList.append(button);
  });
}

function renderPreflight(forceOpen = false) {
  if (!els.preflightList) return;
  const issues = reviewIssues();
  els.preflightList.replaceChildren();
  els.preflightList.classList.toggle("is-open", forceOpen || (state.items.length > 0 && issues.length > 0));
  if (!issues.length) {
    const ok = document.createElement("p");
    ok.className = "preflight-ok";
    ok.textContent = state.items.length ? "Listo para exportar. Revisa visualmente antes de imprimir." : "Sube archivos para iniciar la revision.";
    els.preflightList.append(ok);
    return;
  }

  issues.slice(0, 6).forEach((issue) => {
    const row = document.createElement("p");
    row.className = `preflight-${issue.level}`;
    row.textContent = issue.text;
    els.preflightList.append(row);
  });
  if (issues.length > 6) {
    const extra = document.createElement("p");
    extra.className = "preflight-note";
    extra.textContent = `${issues.length - 6} avisos mas en la hoja.`;
    els.preflightList.append(extra);
  }
}

function itemStatusText(item) {
  if (item.requiresConversion) return "requiere conversion";
  if (isOutOfBounds(item)) return "fuera de hoja";
  if (item.type === "text" && item.fillEnabled === false && !item.strokeEnabled) return "sin color visible";
  const dpi = effectiveDpi(item);
  if (dpi && dpi < 150) return `baja resolucion ${Math.round(dpi)} PPP`;
  if (dpi && dpi < 300) return `aceptable ${Math.round(dpi)} PPP`;
  return item.type === "text" ? "texto editable" : "listo 300 PPP";
}

function itemStatusShort(item) {
  if (item.requiresConversion) return "PDF/AI/PSD";
  if (isOutOfBounds(item)) return "MEDIDA";
  if (item.type === "text" && item.fillEnabled === false && !item.strokeEnabled) return "COLOR";
  const dpi = effectiveDpi(item);
  if (dpi && dpi < 150) return "BAJO";
  if (dpi && dpi < 300) return "OK";
  return "GOOD";
}

function itemStatusLevel(item) {
  if (item.requiresConversion || isOutOfBounds(item)) return "error";
  if (item.type === "text" && item.fillEnabled === false && !item.strokeEnabled) return "error";
  const dpi = effectiveDpi(item);
  if (dpi && dpi < 300) return "warn";
  return "ok";
}

function reviewIssues() {
  const issues = [];
  if (!state.items.length) {
    issues.push({ level: "warn", text: "La hoja esta vacia." });
    return issues;
  }
  state.items.forEach((item) => {
    if (item.requiresConversion) {
      issues.push({ level: "error", text: `${item.name} necesita conversion antes de producir.` });
    }
    if (isOutOfBounds(item)) {
      issues.push({ level: "error", text: `${item.name} se sale del area de impresion.` });
    }
    if (item.type === "text" && item.fillEnabled === false && !item.strokeEnabled) {
      issues.push({ level: "error", text: `${item.name} no tiene color ni trazo visible.` });
    }
    const dpi = effectiveDpi(item);
    if (dpi && dpi < 150) {
      issues.push({ level: "error", text: `${item.name} tiene baja resolucion: ${Math.round(dpi)} PPP.` });
    } else if (dpi && dpi < 300) {
      issues.push({ level: "warn", text: `${item.name} esta debajo de 300 PPP: ${Math.round(dpi)} PPP.` });
    }
  });
  if (needsFabricConfirmation()) {
    issues.push({ level: "error", text: "Falta confirmar tipo de tela para sublimacion." });
  }
  return issues;
}

function effectiveDpi(item) {
  if (!item.image || !item.w) return null;
  const naturalWidth = item.image.naturalWidth || item.image.width || 0;
  if (!naturalWidth) return null;
  return naturalWidth / (item.w / 2.54);
}

function isOutOfBounds(item) {
  const s = sheet();
  return item.x < 0 || item.y < 0 || item.x + item.w > s.width || item.y + item.h > s.height;
}

function needsFabricConfirmation() {
  return (
    serviceMode() === "sublimation" &&
    els.sublimationRequest.value !== "solo_impresion" &&
    !els.fabricType.value.trim()
  );
}

function fileExtension(file) {
  return file.name.split(".").pop()?.toLowerCase() || "";
}

function createTextItem() {
  const text = els.textInput.value.trim() || "Texto";
  const longestLine = text.split(/\r?\n/).reduce((longest, line) => Math.max(longest, line.length), 1);
  const lineCount = text.split(/\r?\n/).length;
  const width = Math.min(sheet().width, Math.max(1, Number(els.textWidth.value) || longestLine * 0.8));
  const height = Math.max(1, Number(els.textObjectHeight.value) || lineCount * 3);
  return {
    id: state.nextId++,
    groupId: state.nextGroupId++,
    type: "text",
    name: `texto-${text.slice(0, 18)}`,
    text,
    fontFamily: els.textFontFamily.value,
    fontSize: Number(els.textFontSize.value) || 120,
    color: normalizeHexColor(els.textColorHex.value),
    fillEnabled: true,
    strokeEnabled: els.textStrokeEnabled.checked,
    strokeWidth: Number(els.textStrokeWidth.value) || 0,
    strokeColor: normalizeHexColor(els.textStrokeColorHex.value),
    bold: els.textBoldBtn.classList.contains("is-active"),
    italic: els.textItalicBtn.classList.contains("is-active"),
    underline: els.textUnderlineBtn.classList.contains("is-active"),
    strike: els.textStrikeBtn.classList.contains("is-active"),
    uppercase: els.textUpperBtn.classList.contains("is-active"),
    lowercase: els.textLowerBtn.classList.contains("is-active"),
    align: activeTextAlign(),
    x: Math.max(0, Number(els.textX.value) || 0.6),
    y: Math.max(0, Number(els.textY.value) || 0.6),
    w: width,
    h: height,
    rotation: 0,
    fileType: "texto",
    requiresConversion: false,
  };
}

function addTextItem() {
  saveHistory();
  const item = createTextItem();
  state.items.push(item);
  state.selectedId = item.id;
  expandSheetToContent();
  clampItem(item);
  render();
}

function updateSelectedText(record = true) {
  const item = selectedTextItem();
  if (!item) {
    addTextItem();
    return;
  }
  if (record) saveHistory();
  item.text = els.textInput.value.trim() || item.text;
  const oldRatio = item.w / item.h;
  item.w = Math.max(1, Number(els.textWidth.value) || item.w);
  item.h = Math.max(1, Number(els.textObjectHeight.value) || item.h);
  if (els.lockTextRatio.checked && document.activeElement === els.textWidth) item.h = item.w / oldRatio;
  if (els.lockTextRatio.checked && document.activeElement === els.textObjectHeight) item.w = item.h * oldRatio;
  item.x = Math.max(0, Number(els.textX.value) || 0);
  item.y = Math.max(0, Number(els.textY.value) || 0);
  item.fontFamily = els.textFontFamily.value;
  item.fontSize = Number(els.textFontSize.value) || item.fontSize || 120;
  item.color = normalizeHexColor(els.textColorHex.value);
  item.fillEnabled = true;
  item.strokeEnabled = els.textStrokeEnabled.checked;
  item.strokeWidth = Number(els.textStrokeWidth.value) || 0;
  item.strokeColor = normalizeHexColor(els.textStrokeColorHex.value);
  item.bold = els.textBoldBtn.classList.contains("is-active");
  item.italic = els.textItalicBtn.classList.contains("is-active");
  item.underline = els.textUnderlineBtn.classList.contains("is-active");
  item.strike = els.textStrikeBtn.classList.contains("is-active");
  item.uppercase = els.textUpperBtn.classList.contains("is-active");
  item.lowercase = els.textLowerBtn.classList.contains("is-active");
  item.align = activeTextAlign();
  item.name = `texto-${item.text.slice(0, 18)}`;
  expandSheetToContent();
  clampItem(item);
  loadTextControls(item);
  render();
}

function loadTextControls(item) {
  if (item?.type !== "text") return;
  els.textInput.value = item.text || "";
  els.textWidth.value = item.w.toFixed(1);
  els.textObjectHeight.value = item.h.toFixed(1);
  els.textX.value = item.x.toFixed(1);
  els.textY.value = item.y.toFixed(1);
  els.textFontFamily.value = item.fontFamily || "Arial, Helvetica, sans-serif";
  els.textFontSize.value = String(item.fontSize || 120);
  els.textColorHex.value = item.color || "#000000";
  els.textColor.value = item.color || "#000000";
  els.textStrokeEnabled.checked = Boolean(item.strokeEnabled);
  els.textStrokeWidth.value = String(item.strokeWidth || 0);
  els.textStrokeColorHex.value = item.strokeColor || "#ffffff";
  els.textStrokeColor.value = item.strokeColor || "#ffffff";
  setToggleButton(els.textBoldBtn, item.bold);
  setToggleButton(els.textItalicBtn, item.italic);
  setToggleButton(els.textUnderlineBtn, item.underline);
  setToggleButton(els.textStrikeBtn, item.strike);
  setToggleButton(els.textUpperBtn, item.uppercase);
  setToggleButton(els.textLowerBtn, item.lowercase);
  setTextAlign(item.align || "left");
}

function selectedOptionText(select) {
  return select.options[select.selectedIndex]?.textContent || "";
}

function rosterConfig(kind) {
  const isNames = kind === "names";
  return {
    kind,
    label: isNames ? "NAMES" : "NUMBERS",
    size: Number(isNames ? els.namesSize.value : els.numbersSize.value) || (isNames ? 2.54 : 10.16),
    fontFamily: isNames ? els.namesFont.value : els.numbersFont.value,
    fontLabel: selectedOptionText(isNames ? els.namesFont : els.numbersFont),
    sizeLabel: selectedOptionText(isNames ? els.namesSize : els.numbersSize),
    fillEnabled: isNames ? els.namesUseTextColor.checked : els.numbersUseTextColor.checked,
    strokeEnabled: isNames ? els.namesUseStroke.checked : els.numbersUseStroke.checked,
    color: normalizeHexColor(isNames ? els.namesTextColorHex.value : els.numbersTextColorHex.value),
    strokeColor: normalizeHexColor(isNames ? els.namesStrokeColorHex.value : els.numbersStrokeColorHex.value),
    strokeWidth: Number(isNames ? els.namesStrokeWidth.value : els.numbersStrokeWidth.value) || 0,
    textInput: isNames ? els.namesEntryText : els.numbersEntryText,
    qtyInput: isNames ? els.namesEntryQty : els.numbersEntryQty,
  };
}

function rosterItemWidth(text, heightCm, kind) {
  const chars = Math.max(1, text.length);
  const factor = kind === "numbers" ? 0.62 : 0.72;
  const estimated = Math.max(heightCm * 1.15, chars * heightCm * factor);
  return Math.min(sheet().width - 1.2, estimated);
}

function createRosterTextItem(kind, text, groupId) {
  const cfg = rosterConfig(kind);
  const cleanText = text.trim() || (kind === "names" ? "NOMBRE" : "00");
  const height = cfg.size;
  const width = rosterItemWidth(cleanText, height, kind);
  return {
    id: state.nextId++,
    groupId,
    type: "text",
    rosterKind: kind,
    name: `${cfg.label.toLowerCase()}-${cleanText.slice(0, 18)}`,
    text: cleanText,
    fontFamily: cfg.fontFamily,
    fontSize: 400,
    color: cfg.color,
    fillEnabled: cfg.fillEnabled,
    strokeEnabled: cfg.strokeEnabled,
    strokeWidth: cfg.strokeWidth,
    strokeColor: cfg.strokeColor,
    bold: true,
    italic: false,
    underline: false,
    strike: false,
    uppercase: kind === "names",
    lowercase: false,
    align: "center",
    x: 0.6,
    y: 0.6,
    w: width,
    h: height,
    rotation: 0,
    fileType: "texto",
    requiresConversion: false,
  };
}

function addRosterEntries(kind) {
  const cfg = rosterConfig(kind);
  const values = cfg.textInput.value
    .split(/[\n,;]/)
    .map((value) => value.trim())
    .filter(Boolean);
  if (!values.length) {
    window.alert(kind === "names" ? "Escribe al menos un nombre." : "Escribe al menos un numero.");
    return;
  }
  const qty = Math.max(1, Math.min(Number(cfg.qtyInput.value) || 1, 99));
  saveHistory();
  values.forEach((value) => {
    const groupId = state.nextGroupId++;
    for (let i = 0; i < qty; i += 1) {
      state.items.push(createRosterTextItem(kind, value, groupId));
    }
  });
  state.selectedId = state.items.at(-1)?.id ?? state.selectedId;
  cfg.textInput.value = "";
  autoArrange(false);
}

function updateRosterSummary() {
  const namesCount = state.items.filter((item) => item.rosterKind === "names").length;
  const numbersCount = state.items.filter((item) => item.rosterKind === "numbers").length;
  els.namesCountLabel.textContent = `(${namesCount}) NAMES`;
  els.numbersCountLabel.textContent = `(${numbersCount}) NUMBERS`;
  els.namesSummary.textContent = `${selectedOptionText(els.namesSize)} - ${selectedOptionText(els.namesFont)}`;
  els.numbersSummary.textContent = `${selectedOptionText(els.numbersSize)} - ${selectedOptionText(els.numbersFont)}`;
  els.namesColorChip.style.background = normalizeHexColor(els.namesTextColorHex.value);
  els.numbersColorChip.style.background = normalizeHexColor(els.numbersTextColorHex.value);
}

function syncColorPair(hexInput, colorInput) {
  hexInput.value = normalizeHexColor(hexInput.value);
  colorInput.value = hexInput.value;
}

function setColorPair(hexInput, colorInput, color) {
  hexInput.value = normalizeHexColor(color);
  colorInput.value = hexInput.value;
}

function normalizeHexColor(value) {
  const clean = String(value || "").trim();
  return /^#[0-9a-f]{6}$/i.test(clean) ? clean : "#000000";
}

function setToggleButton(button, active) {
  button.classList.toggle("is-active", Boolean(active));
}

function activeTextAlign() {
  if (els.textAlignCenterBtn.classList.contains("is-active")) return "center";
  if (els.textAlignRightBtn.classList.contains("is-active")) return "right";
  return "left";
}

function setTextAlign(align) {
  [els.textAlignLeftBtn, els.textAlignCenterBtn, els.textAlignRightBtn].forEach((button) =>
    button.classList.remove("is-active")
  );
  if (align === "center") els.textAlignCenterBtn.classList.add("is-active");
  else if (align === "right") els.textAlignRightBtn.classList.add("is-active");
  else els.textAlignLeftBtn.classList.add("is-active");
}

function previewSelectedText() {
  if (selectedTextItem()) updateSelectedText(false);
}

function isRenderableFile(file) {
  const ext = fileExtension(file);
  return file.type.startsWith("image/") || ["png", "jpg", "jpeg", "webp", "svg"].includes(ext);
}

function baseItem(file, ratio) {
  const targetWidth = Math.min(Number(els.itemWidth.value) || 10, sheet().width);
  const targetHeight = isA4Mode() && state.mugPresetActive ? MUG_WRAP_HEIGHT_CM : targetWidth * ratio;
  return {
    id: state.nextId++,
    groupId: state.nextGroupId++,
    name: file.name.replace(/\.[^.]+$/, ""),
    x: 0.6,
    y: 0.6,
    w: targetWidth,
    h: targetHeight,
    rotation: 0,
    fileType: fileExtension(file) || "archivo",
  };
}

function imageToItem(file, image) {
  const ratio = image.height / image.width;
  return {
    ...baseItem(file, ratio),
    image,
    requiresConversion: false,
  };
}

function placeholderToItem(file) {
  return {
    ...baseItem(file, 1),
    image: null,
    requiresConversion: true,
  };
}

function addItemCopies(base, qty) {
  saveHistory();
  for (let i = 0; i < qty; i += 1) {
    state.items.push({ ...base, id: state.nextId++, x: base.x + i * 0.6, y: base.y + i * 0.6 });
  }
  state.selectedId = state.items.at(-1).id;
  if (state.uploadMode === "manual") {
    expandSheetToContent();
    render();
  }
  else autoArrange(false);
}

function addFile(file) {
  const qty = Math.max(1, Number(els.itemQty.value) || 1);
  if (!isRenderableFile(file)) {
    addItemCopies(placeholderToItem(file), qty);
    showUploadNotice(`${file.name} se agrego al pedido, pero necesita conversion antes de exportar produccion.`);
    return;
  }

  const image = new Image();
  image.onload = () => {
    const base = imageToItem(file, image);
    addItemCopies(base, qty);
  };
  image.onerror = () => {
    addItemCopies(placeholderToItem(file), qty);
    showUploadNotice(`${file.name} se agrego al pedido, pero no se pudo previsualizar en el navegador.`);
  };
  image.src = URL.createObjectURL(file);
}

function showUploadNotice(message) {
  els.uploadNotice.textContent = message;
  els.uploadNotice.hidden = false;
}

function pointFromEvent(event) {
  const rect = canvas.getBoundingClientRect();
  return {
    x: ((event.clientX - rect.left) / rect.width) * canvas.width / pixelsPerCm(),
    y: ((event.clientY - rect.top) / rect.height) * canvas.height / pixelsPerCm(),
  };
}

function hitTest(point) {
  for (let i = state.items.length - 1; i >= 0; i -= 1) {
    const item = state.items[i];
    if (point.x >= item.x && point.x <= item.x + item.w && point.y >= item.y && point.y <= item.y + item.h) {
      return item;
    }
  }
  return null;
}

function hitTextPoint(point) {
  const item = selectedTextItem();
  if (!item?.pointsEnabled) return null;
  const handles = textPointPositions(item);
  const radius = 0.45;
  for (const [key, handle] of Object.entries(handles)) {
    if (Math.abs(point.x - handle.x) <= radius && Math.abs(point.y - handle.y) <= radius) {
      return { item, key };
    }
  }
  return null;
}

function snap(value) {
  return els.snapToggle.checked ? Math.round(value * 2) / 2 : value;
}

function clampItem(item) {
  const s = sheet();
  item.x = Math.max(0, Math.min(item.x, s.width - item.w));
  item.y = Math.max(0, Math.min(item.y, s.height - item.h));
}

function usedItemHeight() {
  return state.items.reduce((max, item) => Math.max(max, item.y + item.h), 0);
}

function targetSheetHeight(extraPadding = AUTO_HEIGHT_PADDING) {
  const options = nestingOptions();
  const used = usedItemHeight();
  const minHeight = isA4Mode() ? A4_HEIGHT_CM : MIN_SHEET_HEIGHT;
  const target = Math.min(MAX_SHEET_HEIGHT, Math.max(minHeight, Math.ceil(used + Math.max(options.margin, extraPadding))));
  if (isA4Mode()) return a4MultiEnabled() ? a4HeightForContent(target) : A4_HEIGHT_CM;
  return target;
}

function expandSheetToContent() {
  const current = Number(els.sheetHeight.value) || MIN_SHEET_HEIGHT;
  const target = targetSheetHeight();
  if (target > current) {
    els.sheetHeight.value = String(target);
    return true;
  }
  return false;
}

function fitSheetToContent() {
  els.sheetHeight.value = String(targetSheetHeight());
}

function applyMugPreset() {
  state.mugPresetActive = true;
  if (!isA4Mode()) {
    els.serviceMode.value = "epson_a4";
    applyServiceSettings();
  }
  els.exportDpi.value = String(PRODUCTION_DPI);
  els.itemWidth.value = String(MUG_WRAP_WIDTH_CM);
  els.mugDesignQty.value = els.itemQty.value || "1";
  els.textWidth.value = String(MUG_WRAP_WIDTH_CM);
  els.textObjectHeight.value = String(MUG_WRAP_HEIGHT_CM);
  const item = selectedItem();
  if (item) {
    saveHistory();
    const groupId = item.groupId ?? item.id;
    state.items
      .filter((entry) => (entry.groupId ?? entry.id) === groupId)
      .forEach((entry) => {
        entry.w = MUG_WRAP_WIDTH_CM;
        entry.h = MUG_WRAP_HEIGHT_CM;
        entry.mugPreset = true;
        clampItem(entry);
      });
    autoArrange(false);
    return;
  }
  window.alert("Preset taza activo: sube tu diseno y se usara ancho 20 cm. Si seleccionas una pieza, se ajusta exacto a 20 x 9 cm.");
  render();
}

function applyMugDesignQuantity() {
  els.itemQty.value = String(Math.max(1, Math.min(Number(els.mugDesignQty.value) || 1, 200)));
  const item = selectedItem();
  if (!item) {
    window.alert("Cantidad lista para el proximo diseno que subas. Si seleccionas un diseno, tambien puedo aplicarla a ese grupo.");
    return;
  }
  saveHistory();
  syncSelectedQuantity();
  autoArrange(false);
}

function autoArrange(record = true) {
  if (record && state.items.length) saveHistory();
  const s = { ...sheet(), height: isA4Mode() && !a4MultiEnabled() ? A4_HEIGHT_CM : MAX_SHEET_HEIGHT };
  const options = nestingOptions();
  const arranged = mugNestingEnabled()
    ? arrangeMugA4(s, options)
    : options.mode === "rows"
      ? arrangeRows(s, options)
      : arrangeProfessional(s, options);
  fitSheetToContent();
  if (!arranged) {
    window.alert("Algunas piezas no caben dentro del largo maximo de 600 cm. Reduce cantidad, ancho o separacion.");
  }
  render();
}

function nestingOptions() {
  const margin = els.marginToggle.checked ? Math.max(0, Number(els.nestMargin.value) || 0) : 0;
  return {
    mode: els.nestMode.value,
    gap: Math.max(0, Number(els.itemSpacing.value) || 0),
    margin,
    rotate: els.nestRotate.checked,
    compact: els.nestCompact.checked,
    sort: els.nestSort.value,
  };
}

function sortedNestItems(items, sortMode) {
  const sortable = items.map((item, index) => ({ item, index }));
  if (sortMode === "order") return sortable;
  sortable.sort((a, b) => {
    if (sortMode === "height") return b.item.h - a.item.h || b.item.w - a.item.w || a.index - b.index;
    if (sortMode === "width") return b.item.w - a.item.w || b.item.h - a.item.h || a.index - b.index;
    return b.item.w * b.item.h - a.item.w * a.item.h || Math.max(b.item.w, b.item.h) - Math.max(a.item.w, a.item.h) || a.index - b.index;
  });
  return sortable;
}

function arrangeRows(s, options) {
  const maxX = s.width - options.margin;
  const maxY = s.height - options.margin;
  let x = options.margin;
  let y = options.margin;
  let rowHeight = 0;
  let allFit = true;

  sortedNestItems(state.items, options.sort).forEach(({ item }) => {
    chooseRowOrientation(item, maxX - options.margin, options);
    if (x + item.w > maxX && x > options.margin) {
      x = options.margin;
      y += rowHeight + options.gap;
      rowHeight = 0;
    }
    item.x = x;
    item.y = y;
    if (item.y + item.h > maxY) allFit = false;
    x += item.w + options.gap;
    rowHeight = Math.max(rowHeight, item.h);
  });

  if (options.compact) compactUp(options);
  return allFit;
}

function arrangeMugA4(s, options) {
  const pageGap = (A4_HEIGHT_CM - MUGS_PER_A4 * MUG_WRAP_HEIGHT_CM) / (MUGS_PER_A4 + 1);
  const x = Math.max(0, (A4_WIDTH_CM - MUG_WRAP_WIDTH_CM) / 2);
  let allFit = true;

  sortedNestItems(state.items, options.sort).forEach(({ item }, index) => {
    const page = Math.floor(index / MUGS_PER_A4);
    const slot = index % MUGS_PER_A4;
    if (!a4MultiEnabled() && page > 0) allFit = false;
    item.x = x;
    item.y = page * A4_HEIGHT_CM + pageGap + slot * (MUG_WRAP_HEIGHT_CM + pageGap);
    item.w = MUG_WRAP_WIDTH_CM;
    item.h = MUG_WRAP_HEIGHT_CM;
    item.rotation = 0;
    item.mugPreset = true;
    if (item.y + item.h > s.height) allFit = false;
  });

  return allFit;
}

function chooseRowOrientation(item, availableWidth, options) {
  if (!options.rotate || item.type === "text") return;
  const normalFits = item.w <= availableWidth;
  const rotatedFits = item.h <= availableWidth;
  if ((!normalFits && rotatedFits) || (rotatedFits && item.h < item.w)) {
    rotateNestItem(item);
  }
}

function arrangeProfessional(s, options) {
  const placed = [];
  let allFit = true;
  const maxX = s.width - options.margin;
  const maxY = s.height - options.margin;

  sortedNestItems(state.items, options.sort).forEach(({ item }) => {
    const placement = bestPlacementForItem(item, placed, maxX, maxY, options);
    if (!placement) {
      item.x = options.margin;
      item.y = Math.max(options.margin, usedBottom(placed) + options.gap);
      allFit = false;
    } else {
      if (placement.rotated) rotateNestItem(item);
      item.x = placement.x;
      item.y = placement.y;
    }
    placed.push(rectForItem(item, options.gap));
  });

  if (options.compact) compactUp(options);
  return allFit && state.items.every((item) => item.y + item.h <= maxY);
}

function bestPlacementForItem(item, placed, maxX, maxY, options) {
  const candidates = candidatePositions(placed, options.margin, options.gap);
  const orientations = [{ w: item.w, h: item.h, rotated: false }];
  if (options.rotate && item.type !== "text" && item.w !== item.h) {
    orientations.push({ w: item.h, h: item.w, rotated: true });
  }

  let best = null;
  orientations.forEach((orientation) => {
    candidates.forEach((candidate) => {
      const rect = {
        x: candidate.x,
        y: candidate.y,
        w: orientation.w,
        h: orientation.h,
      };
      if (rect.x + rect.w > maxX || rect.y + rect.h > maxY) return;
      if (placed.some((other) => rectsOverlap(rect, other))) return;
      const score = placementScore(rect, placed, options);
      if (!best || score < best.score) {
        best = { ...rect, rotated: orientation.rotated, score };
      }
    });
  });
  return best;
}

function candidatePositions(placed, margin, gap) {
  const positions = [{ x: margin, y: margin }];
  placed.forEach((rect) => {
    positions.push({ x: rect.x + rect.w, y: rect.y });
    positions.push({ x: rect.x, y: rect.y + rect.h });
    positions.push({ x: rect.x + rect.w, y: rect.y + rect.h });
  });
  return dedupePositions(positions);
}

function dedupePositions(positions) {
  const seen = new Set();
  return positions
    .map((pos) => ({ x: Math.max(0, Number(pos.x.toFixed(3))), y: Math.max(0, Number(pos.y.toFixed(3))) }))
    .filter((pos) => {
      const key = `${pos.x}:${pos.y}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .sort((a, b) => a.y - b.y || a.x - b.x);
}

function placementScore(rect, placed, options) {
  const bottom = Math.max(rect.y + rect.h, usedBottom(placed));
  const right = Math.max(rect.x + rect.w, usedRight(placed));
  const contact = contactScore(rect, placed, 0);
  return bottom * 100000 + right * 100 - contact;
}

function contactScore(rect, placed, gap) {
  let score = 0;
  placed.forEach((other) => {
    const verticalTouch = Math.abs(rect.x - (other.x + other.w + gap)) < 0.01 || Math.abs(other.x - (rect.x + rect.w + gap)) < 0.01;
    const horizontalTouch = Math.abs(rect.y - (other.y + other.h + gap)) < 0.01 || Math.abs(other.y - (rect.y + rect.h + gap)) < 0.01;
    if (verticalTouch) score += overlapLength(rect.y, rect.y + rect.h, other.y, other.y + other.h);
    if (horizontalTouch) score += overlapLength(rect.x, rect.x + rect.w, other.x, other.x + other.w);
  });
  return score;
}

function overlapLength(a1, a2, b1, b2) {
  return Math.max(0, Math.min(a2, b2) - Math.max(a1, b1));
}

function usedBottom(rects) {
  return rects.reduce((max, rect) => Math.max(max, rect.y + rect.h), 0);
}

function usedRight(rects) {
  return rects.reduce((max, rect) => Math.max(max, rect.x + rect.w), 0);
}

function rectForItem(item, gap = 0) {
  return { x: item.x, y: item.y, w: item.w + gap, h: item.h + gap };
}

function rectsOverlap(a, b) {
  return a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y;
}

function rotateNestItem(item) {
  [item.w, item.h] = [item.h, item.w];
  item.rotation = (item.rotation + 90) % 360;
}

function compactUp(options) {
  const sorted = [...state.items].sort((a, b) => a.y - b.y || a.x - b.x);
  sorted.forEach((item) => {
    let targetY = options.margin;
    const blockers = state.items.filter((other) => other.id !== item.id && horizontalOverlap(item, other, options.gap) && other.y + other.h <= item.y);
    blockers.forEach((other) => {
      targetY = Math.max(targetY, other.y + other.h + options.gap);
    });
    item.y = Math.max(options.margin, targetY);
  });
}

function horizontalOverlap(a, b, gap) {
  return a.x < b.x + b.w + gap && a.x + a.w + gap > b.x;
}

els.fileInput.addEventListener("change", (event) => {
  els.uploadNotice.hidden = true;
  [...event.target.files].forEach(addFile);
  event.target.value = "";
  els.fileInput.multiple = true;
});

els.itemList.addEventListener("click", (event) => {
  const row = event.target.closest(".item-row");
  if (!row) return;
  state.selectedId = Number(row.dataset.itemId);
  loadTextControls(selectedItem());
  render();
});

els.reviewBtn.addEventListener("click", () => {
  renderPreflight(true);
});

els.mugPresetBtn.addEventListener("click", applyMugPreset);
els.applyMugQtyBtn.addEventListener("click", applyMugDesignQuantity);
els.a4NestBtn.addEventListener("click", () => {
  state.mugPresetActive = true;
  autoArrange(true);
});
els.a4MultiSheet.addEventListener("change", () => {
  if (isA4Mode()) {
    fitSheetToContent();
    render();
  }
});
els.mugNesting.addEventListener("change", () => {
  if (isA4Mode()) autoArrange(true);
});
els.mugDesignQty.addEventListener("input", () => {
  els.itemQty.value = String(Math.max(1, Math.min(Number(els.mugDesignQty.value) || 1, 200)));
});
els.a4Mirror.addEventListener("change", render);
els.a4SheetCopies.addEventListener("input", render);

els.centerSelectedBtn.addEventListener("click", () => {
  const item = selectedItem();
  if (!item) return;
  saveHistory();
  const s = sheet();
  item.x = Math.max(0, (s.width - item.w) / 2);
  clampItem(item);
  loadTextControls(item);
  render();
});

els.fitHeightBtn.addEventListener("click", () => {
  saveHistory();
  fitSheetToContent();
  render();
});

els.clearSheetBtn.addEventListener("click", () => {
  if (!state.items.length) return;
  if (!window.confirm("Quieres limpiar toda la hoja?")) return;
  saveHistory();
  state.items = [];
  state.selectedId = null;
  fitSheetToContent();
  render();
});

function closeStartModal() {
  els.startModal.hidden = true;
}

els.closeStartModal.addEventListener("click", closeStartModal);
els.startAutoBtn.addEventListener("click", () => {
  state.uploadMode = "auto";
  els.nestMode.value = "professional";
  els.nestRotate.checked = true;
  els.nestCompact.checked = true;
  els.fileInput.multiple = true;
  closeStartModal();
  els.fileInput.click();
});
els.startManualBtn.addEventListener("click", () => {
  state.uploadMode = "manual";
  els.fileInput.multiple = false;
  closeStartModal();
  els.fileInput.click();
});
els.startEditBtn.addEventListener("click", () => {
  if (restoreDraft()) closeStartModal();
});
els.startNamesBtn.addEventListener("click", () => {
  closeStartModal();
  els.namesDetails.open = true;
  els.numbersDetails.open = false;
  els.namesEntryText.focus();
});

els.addTextBtn.addEventListener("click", addTextItem);
els.textDuplicateBtn.addEventListener("click", () => els.duplicateBtn.click());
els.textQuantityBtn.addEventListener("click", () => {
  syncSelectedQuantity();
  autoArrange(false);
});
[els.textInput, els.textWidth, els.textObjectHeight, els.textX, els.textY, els.textFontFamily, els.textFontSize, els.textColorHex, els.textStrokeWidth, els.textStrokeColorHex].forEach((input) => {
  input.addEventListener("input", previewSelectedText);
  input.addEventListener("change", previewSelectedText);
});
els.textColor.addEventListener("input", () => {
  els.textColorHex.value = els.textColor.value;
  previewSelectedText();
});
els.textStrokeColor.addEventListener("input", () => {
  els.textStrokeColorHex.value = els.textStrokeColor.value;
  previewSelectedText();
});
els.textColorHex.addEventListener("change", () => {
  els.textColorHex.value = normalizeHexColor(els.textColorHex.value);
  els.textColor.value = els.textColorHex.value;
  previewSelectedText();
});
els.textStrokeColorHex.addEventListener("change", () => {
  els.textStrokeColorHex.value = normalizeHexColor(els.textStrokeColorHex.value);
  els.textStrokeColor.value = els.textStrokeColorHex.value;
  previewSelectedText();
});
els.textStrokeEnabled.addEventListener("change", previewSelectedText);
[els.textBoldBtn, els.textUnderlineBtn, els.textStrikeBtn, els.textItalicBtn].forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("is-active");
    previewSelectedText();
  });
});
els.textUpperBtn.addEventListener("click", () => {
  els.textUpperBtn.classList.toggle("is-active");
  if (els.textUpperBtn.classList.contains("is-active")) els.textLowerBtn.classList.remove("is-active");
  previewSelectedText();
});
els.textLowerBtn.addEventListener("click", () => {
  els.textLowerBtn.classList.toggle("is-active");
  if (els.textLowerBtn.classList.contains("is-active")) els.textUpperBtn.classList.remove("is-active");
  previewSelectedText();
});
[
  [els.textAlignLeftBtn, "left"],
  [els.textAlignCenterBtn, "center"],
  [els.textAlignRightBtn, "right"],
].forEach(([button, align]) => {
  button.addEventListener("click", () => {
    setTextAlign(align);
    previewSelectedText();
  });
});

els.addNameEntryBtn.addEventListener("click", () => addRosterEntries("names"));
els.addNumberEntryBtn.addEventListener("click", () => addRosterEntries("numbers"));
els.namesEntryText.addEventListener("keydown", (event) => {
  if (event.key === "Enter") addRosterEntries("names");
});
els.numbersEntryText.addEventListener("keydown", (event) => {
  if (event.key === "Enter") addRosterEntries("numbers");
});

[
  els.namesSize,
  els.numbersSize,
  els.namesFont,
  els.numbersFont,
  els.namesStrokeWidth,
  els.numbersStrokeWidth,
  els.namesUseTextColor,
  els.numbersUseTextColor,
  els.namesUseStroke,
  els.numbersUseStroke,
].forEach((input) => {
  input.addEventListener("input", updateRosterSummary);
  input.addEventListener("change", updateRosterSummary);
});

[
  [els.namesTextColorHex, els.namesTextColor],
  [els.numbersTextColorHex, els.numbersTextColor],
  [els.namesStrokeColorHex, els.namesStrokeColor],
  [els.numbersStrokeColorHex, els.numbersStrokeColor],
].forEach(([hexInput, colorInput]) => {
  colorInput.addEventListener("input", () => {
    hexInput.value = colorInput.value;
    updateRosterSummary();
  });
  hexInput.addEventListener("change", () => {
    syncColorPair(hexInput, colorInput);
    updateRosterSummary();
  });
});

document.querySelectorAll(".swatch-row").forEach((row) => {
  row.addEventListener("click", (event) => {
    const swatch = event.target.closest("[data-color]");
    if (!swatch) return;
    const hexInput = document.querySelector(`#${row.dataset.target}`);
    const colorInput = hexInput?.id.includes("names")
      ? els.namesTextColor
      : hexInput?.id.includes("numbers")
        ? els.numbersTextColor
        : null;
    if (!hexInput || !colorInput) return;
    setColorPair(hexInput, colorInput, swatch.dataset.color);
    updateRosterSummary();
  });
});

canvas.addEventListener("pointerdown", (event) => {
  const point = pointFromEvent(event);
  const textPoint = hitTextPoint(point);
  if (textPoint) {
    saveHistory();
    state.activePoint = textPoint;
    canvas.setPointerCapture(event.pointerId);
    return;
  }
  const item = hitTest(point);
  state.selectedId = item?.id ?? null;
  loadTextControls(item);
  if (item) {
    saveHistory();
    state.drag = { id: item.id, dx: point.x - item.x, dy: point.y - item.y };
    canvas.setPointerCapture(event.pointerId);
  }
  render();
});

canvas.addEventListener("pointermove", (event) => {
  if (state.activePoint) {
    const point = pointFromEvent(event);
    const item = state.activePoint.item;
    if (!item.points) item.points = defaultTextPoints();
    if (state.activePoint.key === "tl") item.points.tl = point.y - item.y;
    if (state.activePoint.key === "tr") item.points.tr = point.y - item.y;
    if (state.activePoint.key === "bl") item.points.bl = point.y - item.y - item.h;
    if (state.activePoint.key === "br") item.points.br = point.y - item.y - item.h;
    render();
    return;
  }
  if (!state.drag) return;
  const item = selectedItem();
  if (!item) return;
  const point = pointFromEvent(event);
  item.x = snap(point.x - state.drag.dx);
  item.y = Math.max(0, snap(point.y - state.drag.dy));
  expandSheetToContent();
  clampItem(item);
  loadTextControls(item);
  render();
});

canvas.addEventListener("pointerup", () => {
  state.drag = null;
  state.activePoint = null;
});

els.duplicateBtn.addEventListener("click", () => {
  const item = selectedItem();
  if (!item) return;
  saveHistory();
  const copy = { ...item, id: state.nextId++, x: item.x + 0.6, y: item.y + 0.6 };
  state.items.push(copy);
  expandSheetToContent();
  clampItem(copy);
  state.selectedId = copy.id;
  render();
});

els.cropBtn.addEventListener("click", () => {
  cropSelectedTransparent();
});

els.deleteBtn.addEventListener("click", () => {
  if (!state.selectedId) return;
  saveHistory();
  state.items = state.items.filter((item) => item.id !== state.selectedId);
  state.selectedId = state.items.at(-1)?.id ?? null;
  fitSheetToContent();
  render();
});

els.applySizeBtn.addEventListener("click", () => {
  const item = selectedItem();
  if (!item) return;
  saveHistory();
  const width = Number(els.itemWidth.value);
  if (width > 0) {
    const ratio = item.h / item.w;
    state.items
      .filter((entry) => entry.groupId === item.groupId)
      .forEach((entry) => {
        entry.w = width;
        entry.h = width * ratio;
        expandSheetToContent();
        clampItem(entry);
      });
  }
  syncSelectedQuantity();
  autoArrange(false);
});

els.rotateBtn.addEventListener("click", () => {
  const item = selectedItem();
  if (!item) return;
  saveHistory();
  [item.w, item.h] = [item.h, item.w];
  item.rotation = (item.rotation + 90) % 360;
  expandSheetToContent();
  clampItem(item);
  render();
});

els.autoArrangeBtn.addEventListener("click", autoArrange);
els.exportPngBtn.addEventListener("click", () => {
  if (!canExportProduction()) return;
  const productionCanvas = createFinalProductionCanvas();
  const link = document.createElement("a");
  link.download = `${fileBaseName()}-${isA4Mode() ? `a4-epson-f170${a4MirrorSuffix()}` : `${sheet().width}cm-final`}.png`;
  link.href = productionCanvas.toDataURL("image/png");
  link.click();
});

els.exportPdfBtn.addEventListener("click", async () => {
  if (!canExportProduction()) return;
  const productionCanvas = createFinalProductionCanvas();
  const pdfBytes = isA4Mode()
    ? await createMultiPageTransparentPdf(productionCanvas, A4_WIDTH_CM, A4_HEIGHT_CM, a4SheetCopies())
    : await createTransparentPdf(productionCanvas, sheet().width, sheet().height);
  const blob = new Blob([pdfBytes], { type: "application/pdf" });
  const link = document.createElement("a");
  link.download = `${fileBaseName()}-${isA4Mode() ? `a4-epson-f170${a4MirrorSuffix()}` : `${sheet().width}cm-rasterlink`}.pdf`;
  link.href = URL.createObjectURL(blob);
  link.click();
  setTimeout(() => URL.revokeObjectURL(link.href), 1000);
});

els.exportOrderBtn.addEventListener("click", () => {
  const blob = new Blob([orderSummary()], { type: "text/plain;charset=utf-8" });
  const link = document.createElement("a");
  link.download = `${fileBaseName()}-orden.txt`;
  link.href = URL.createObjectURL(blob);
  link.click();
  setTimeout(() => URL.revokeObjectURL(link.href), 1000);
});

els.copyOrderBtn.addEventListener("click", async () => {
  await copyOrderSummary();
});

els.whatsappOrderBtn.addEventListener("click", async () => {
  await copyOrderSummary(false);
  const text = encodeURIComponent(orderSummary());
  window.open(`https://wa.me/?text=${text}`, "_blank", "noopener");
});

async function copyOrderSummary(showAlert = true) {
  const summary = orderSummary();
  try {
    await navigator.clipboard.writeText(summary);
  } catch (error) {
    const temp = document.createElement("textarea");
    temp.value = summary;
    document.body.append(temp);
    temp.select();
    document.execCommand("copy");
    temp.remove();
  }
  if (showAlert) window.alert("Resumen copiado. Puedes pegarlo en WhatsApp o en tu orden.");
}

function canExportProduction() {
  if (!state.items.length) {
    window.alert("Sube o crea al menos una pieza antes de exportar.");
    return false;
  }
  const unresolved = state.items.filter((item) => item.requiresConversion);
  if (needsFabricConfirmation()) {
    window.alert("Confirma el tipo de tela antes de generar produccion de sublimacion.");
    return false;
  }
  if (unresolved.length) {
    const names = unresolved.map((item) => item.name).join(", ");
    window.alert(`Estos archivos necesitan conversion antes de generar produccion: ${names}`);
    return false;
  }
  const criticalIssues = reviewIssues().filter((issue) => issue.level === "error");
  if (!criticalIssues.length) return true;
  return window.confirm(`La revision encontro ${criticalIssues.length} aviso(s) critico(s). Quieres exportar de todos modos?`);
}

function syncSelectedQuantity() {
  const item = selectedItem();
  if (!item) return;
  const qty = Math.max(1, Number(els.itemQty.value) || 1);
  const groupId = item.groupId ?? item.id;
  state.items.forEach((entry) => {
    if (!entry.groupId) entry.groupId = entry.id;
  });
  const group = state.items.filter((entry) => entry.groupId === groupId);
  if (group.length < qty) {
    const source = selectedItem();
    for (let i = group.length; i < qty; i += 1) {
      state.items.push({ ...source, id: state.nextId++, x: source.x + i * 0.6, y: source.y + i * 0.6 });
    }
  } else if (group.length > qty) {
    const keepIds = new Set(group.slice(0, qty).map((entry) => entry.id));
    state.items = state.items.filter((entry) => entry.groupId !== groupId || keepIds.has(entry.id));
    if (!selectedItem()) {
      state.selectedId = group[0]?.id ?? state.items.at(-1)?.id ?? null;
    }
  }
}

function cropSelectedTransparent() {
  const item = selectedItem();
  if (!item?.image) {
    window.alert("Selecciona una imagen PNG/SVG/WEBP/JPG para recortar.");
    return;
  }

  const source = item.image;
  const temp = document.createElement("canvas");
  temp.width = source.naturalWidth || source.width;
  temp.height = source.naturalHeight || source.height;
  const tempCtx = temp.getContext("2d");
  tempCtx.drawImage(source, 0, 0);
  const pixels = tempCtx.getImageData(0, 0, temp.width, temp.height).data;
  let minX = temp.width;
  let minY = temp.height;
  let maxX = -1;
  let maxY = -1;

  for (let y = 0; y < temp.height; y += 1) {
    for (let x = 0; x < temp.width; x += 1) {
      const index = (y * temp.width + x) * 4;
      if (pixels[index + 3] > 8) {
        minX = Math.min(minX, x);
        minY = Math.min(minY, y);
        maxX = Math.max(maxX, x);
        maxY = Math.max(maxY, y);
      }
    }
  }

  if (maxX < minX || maxY < minY) {
    window.alert("No se encontro contenido visible para recortar.");
    return;
  }

  const cropW = maxX - minX + 1;
  const cropH = maxY - minY + 1;
  if (cropW === temp.width && cropH === temp.height) {
    window.alert("La imagen no tiene bordes transparentes para recortar.");
    return;
  }

  const cropped = document.createElement("canvas");
  cropped.width = cropW;
  cropped.height = cropH;
  cropped.getContext("2d").drawImage(temp, minX, minY, cropW, cropH, 0, 0, cropW, cropH);

  const croppedImage = new Image();
  croppedImage.onload = () => {
    const oldWidth = item.w;
    const newRatio = croppedImage.height / croppedImage.width;
    state.items
      .filter((entry) => entry.groupId === item.groupId)
      .forEach((entry) => {
        entry.image = croppedImage;
        entry.w = oldWidth;
        entry.h = oldWidth * newRatio;
      });
    autoArrange(false);
  };
  croppedImage.src = cropped.toDataURL("image/png");
}

function fileBaseName() {
  const name = els.customerName.value.trim() || "cliente";
  const cleanName = name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/gi, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase();
  const today = new Date().toISOString().slice(0, 10);
  const prefix = isA4Mode() ? "epson-f170-a4" : serviceMode() === "sublimation" ? "sublimacion" : "dtf";
  return `${prefix}-${cleanName || "cliente"}-${today}`;
}

function orderSummary() {
  const s = sheet();
  const used = state.items.reduce((max, item) => Math.max(max, item.y + item.h), 0);
  const printableUsed = Math.min(used, s.height);
  const price = printableUsed * (Number(els.pricePerCm.value) || 0);
  const issues = reviewIssues().filter((issue) => !(issue.level === "warn" && issue.text === "La hoja esta vacia."));
  const namesCount = state.items.filter((item) => item.rosterKind === "names").length;
  const numbersCount = state.items.filter((item) => item.rosterKind === "numbers").length;
  const lines = [
    `ORDEN ${serviceLabel().toUpperCase()}`,
    "",
    `Cliente: ${els.customerName.value.trim() || "-"}`,
    `WhatsApp: ${els.customerPhone.value.trim() || "-"}`,
    `Servicio: ${serviceLabel()}`,
    ...serviceDetails(),
    `Hoja: ${s.width} x ${s.height} cm`,
    `Altura usada: ${printableUsed.toFixed(1)} cm`,
    `Piezas: ${state.items.length}`,
    `Nombres: ${namesCount}`,
    `Numeros: ${numbersCount}`,
    `Estado: ${productionStatusText()}`,
    `Total estimado: ${formatMoney(price)}`,
    `Revision: ${issues.length ? `${issues.length} aviso(s)` : "Sin avisos"}`,
    ...issues.map((issue) => `- ${issue.text}`),
    "",
    "Archivos:",
    ...state.items.map((item, index) => {
      const status = item.requiresConversion ? "requiere conversion" : "listo";
      const kind = item.rosterKind ? `${item.rosterKind} - ` : "";
      return `${index + 1}. ${kind}${item.name}.${item.fileType} - ${item.w.toFixed(1)} x ${item.h.toFixed(1)} cm - ${status}`;
    }),
    "",
    "Notas:",
    els.customerNotes.value.trim() || "-",
    "",
  ];
  return lines.join("\n");
}

function serviceDetails() {
  if (isA4Mode()) {
    return [
      "Impresora: Epson SureColor F170",
      `Formato: A4 vertical ${A4_WIDTH_CM} x ${A4_HEIGHT_CM} cm`,
      `Multi hojas: ${els.a4MultiSheet.checked ? "Si" : "No"}`,
      `Espejo A4: ${els.a4Mirror.checked ? "Si, PNG/PDF invertido horizontalmente por hoja" : "No"}`,
      `Hojas A4 base: ${a4PageCount(sheet().height)}`,
      `Copias por hoja A4: ${a4SheetCopies()}`,
      `Impresiones A4 totales: ${a4PageCount(sheet().height) * a4SheetCopies()}`,
      `Nesting tazas: ${els.mugNesting.checked ? `${MUGS_PER_A4} por hoja` : "Manual"}`,
      `Preset taza: ${MUG_WRAP_WIDTH_CM} x ${MUG_WRAP_HEIGHT_CM} cm a ${PRODUCTION_DPI} DPI`,
    ];
  }
  if (serviceMode() !== "sublimation") return [];
  return [
    `Papel: ${els.paperWidth.value} cm`,
    `Solicitud: ${selectedText(els.sublimationRequest)}`,
    `Tela: ${selectedText(els.fabricSource)}`,
    `Tipo de tela confirmado: ${els.fabricType.value.trim() || "-"}`,
  ];
}

function selectedText(select) {
  return select.options[select.selectedIndex]?.textContent || "-";
}

function applyServiceSettings() {
  const width = configuredPrintWidth();
  els.sublimationOptions.hidden = serviceMode() !== "sublimation";
  els.epsonOptions.hidden = !isA4Mode();
  els.sheetWidth.max = String(width);
  els.sheetWidth.value = String(width);
  els.itemWidth.max = String(width);
  els.sheetHeight.step = isA4Mode() ? "29.7" : "1";
  if (isA4Mode()) {
    els.sheetHeight.min = String(A4_HEIGHT_CM);
    els.sheetHeight.value = formatCm(state.items.length ? targetSheetHeight() : A4_HEIGHT_CM);
    els.itemWidth.value = String(MUG_WRAP_WIDTH_CM);
    els.exportDpi.value = String(PRODUCTION_DPI);
  } else {
    els.sheetHeight.min = "30";
  }
  if (serviceMode() === "sublimation" && Number(els.zoom.value) > 12) {
    els.zoom.value = "8";
  }
  if (isA4Mode() && Number(els.zoom.value) < 12) {
    els.zoom.value = "18";
  }
  if (serviceMode() === "dtf" && Number(els.zoom.value) < 10) {
    els.zoom.value = "18";
  }
  state.items.forEach(clampItem);
  render();
}

[els.sheetWidth, els.sheetHeight, els.zoom, els.pricePerCm].forEach((input) => {
  input.addEventListener("input", render);
});

els.itemSpacing.addEventListener("input", () => {
  els.toolbarSpacing.value = els.itemSpacing.value;
  autoArrange(false);
});
[
  els.nestMode,
  els.nestMargin,
  els.nestSort,
  els.nestRotate,
  els.nestCompact,
].forEach((input) => {
  input.addEventListener("input", () => autoArrange(false));
  input.addEventListener("change", () => autoArrange(false));
});

els.marginToggle.addEventListener("change", render);
els.toolbarSpacing.addEventListener("input", () => {
  els.itemSpacing.value = els.toolbarSpacing.value;
  autoArrange(false);
});

els.toolbarZoom.addEventListener("input", () => {
  const percent = Math.max(25, Math.min(Number(els.toolbarZoom.value) || 100, 300));
  els.zoom.value = String(Math.max(5, Math.min(defaultZoomForService() * (percent / 100), 35)));
  render();
});

els.toolUndoBtn.addEventListener("click", undo);
els.toolRedoBtn.addEventListener("click", redo);
els.toolUploadBtn.addEventListener("click", () => els.fileInput.click());
els.toolTextBtn.addEventListener("click", addTextItem);
els.toolCropBtn.addEventListener("click", () => els.cropBtn.click());
els.toolRotateBtn.addEventListener("click", () => els.rotateBtn.click());
els.toolDuplicateBtn.addEventListener("click", () => els.duplicateBtn.click());
els.toolDeleteBtn.addEventListener("click", () => els.deleteBtn.click());
els.toolAutoBtn.addEventListener("click", () => autoArrange(true));

[els.serviceMode, els.paperWidth].forEach((input) => {
  input.addEventListener("change", applyServiceSettings);
});

[els.sublimationRequest, els.fabricSource, els.fabricType].forEach((input) => {
  input.addEventListener("input", render);
  input.addEventListener("change", render);
});

function createProductionCanvas() {
  const s = sheet();
  const dpi = Math.max(72, Math.min(Number(els.exportDpi.value) || 150, 300));
  const pxPerCm = dpi / 2.54;
  const exportCanvas = document.createElement("canvas");
  exportCanvas.width = Math.round(s.width * pxPerCm);
  exportCanvas.height = Math.round(s.height * pxPerCm);

  const exportCtx = exportCanvas.getContext("2d");
  exportCtx.clearRect(0, 0, exportCanvas.width, exportCanvas.height);
  state.items.forEach((item) => drawProductionItem(exportCtx, item, pxPerCm));
  return exportCanvas;
}

function createFinalProductionCanvas() {
  const productionCanvas = createProductionCanvas();
  if (!a4MirrorEnabled()) return productionCanvas;
  return mirrorA4Canvas(productionCanvas);
}

function mirrorA4Canvas(sourceCanvas) {
  const pxPerCm = sourceCanvas.width / A4_WIDTH_CM;
  const pageHeightPx = Math.round(A4_HEIGHT_CM * pxPerCm);
  const mirrored = document.createElement("canvas");
  mirrored.width = sourceCanvas.width;
  mirrored.height = sourceCanvas.height;
  const mirroredCtx = mirrored.getContext("2d");
  mirroredCtx.clearRect(0, 0, mirrored.width, mirrored.height);
  const pages = Math.max(1, Math.ceil(sourceCanvas.height / pageHeightPx));

  for (let page = 0; page < pages; page += 1) {
    const y = page * pageHeightPx;
    const sliceHeight = Math.min(pageHeightPx, sourceCanvas.height - y);
    mirroredCtx.save();
    mirroredCtx.translate(sourceCanvas.width, y);
    mirroredCtx.scale(-1, 1);
    mirroredCtx.drawImage(sourceCanvas, 0, y, sourceCanvas.width, sliceHeight, 0, 0, sourceCanvas.width, sliceHeight);
    mirroredCtx.restore();
  }

  return mirrored;
}

function stringBytes(value) {
  return new TextEncoder().encode(value);
}

async function deflateBytes(bytes) {
  if (!("CompressionStream" in window)) return bytes;
  const stream = new Blob([bytes]).stream().pipeThrough(new CompressionStream("deflate"));
  return new Uint8Array(await new Response(stream).arrayBuffer());
}

async function createTransparentPdf(sourceCanvas, widthCm, heightCm) {
  const { compressedRgb, compressedAlpha } = await transparentImageStreams(sourceCanvas);
  const pageW = (widthCm / 2.54) * 72;
  const pageH = (heightCm / 2.54) * 72;
  const content = stringBytes(`q\n${pageW.toFixed(4)} 0 0 ${pageH.toFixed(4)} 0 0 cm\n/Im0 Do\nQ\n`);

  const objects = [
    stringBytes("<< /Type /Catalog /Pages 2 0 R >>"),
    stringBytes("<< /Type /Pages /Kids [3 0 R] /Count 1 >>"),
    stringBytes(`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${pageW.toFixed(4)} ${pageH.toFixed(4)}] /Resources << /XObject << /Im0 4 0 R >> >> /Contents 6 0 R >>`),
    pdfStream(
      `<< /Type /XObject /Subtype /Image /Width ${sourceCanvas.width} /Height ${sourceCanvas.height} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /FlateDecode /SMask 5 0 R /Length ${compressedRgb.length} >>`,
      compressedRgb
    ),
    pdfStream(
      `<< /Type /XObject /Subtype /Image /Width ${sourceCanvas.width} /Height ${sourceCanvas.height} /ColorSpace /DeviceGray /BitsPerComponent 8 /Filter /FlateDecode /Length ${compressedAlpha.length} >>`,
      compressedAlpha
    ),
    pdfStream(`<< /Length ${content.length} >>`, content),
  ];

  return assemblePdf(objects);
}

async function transparentImageStreams(sourceCanvas) {
  const imageData = sourceCanvas.getContext("2d").getImageData(0, 0, sourceCanvas.width, sourceCanvas.height).data;
  const rgb = new Uint8Array(sourceCanvas.width * sourceCanvas.height * 3);
  const alpha = new Uint8Array(sourceCanvas.width * sourceCanvas.height);

  for (let src = 0, rgbIndex = 0, alphaIndex = 0; src < imageData.length; src += 4) {
    rgb[rgbIndex++] = imageData[src];
    rgb[rgbIndex++] = imageData[src + 1];
    rgb[rgbIndex++] = imageData[src + 2];
    alpha[alphaIndex++] = imageData[src + 3];
  }

  return {
    compressedRgb: await deflateBytes(rgb),
    compressedAlpha: await deflateBytes(alpha),
  };
}

async function createMultiPageTransparentPdf(sourceCanvas, pageWidthCm, pageHeightCm, copiesPerPage = 1) {
  const pxPerCm = sourceCanvas.width / pageWidthCm;
  const pageWidthPx = sourceCanvas.width;
  const pageHeightPx = Math.round(pageHeightCm * pxPerCm);
  const pages = Math.max(1, Math.ceil(sourceCanvas.height / pageHeightPx));
  const pageW = (pageWidthCm / 2.54) * 72;
  const pageH = (pageHeightCm / 2.54) * 72;
  const pageEntries = [];

  for (let page = 0; page < pages; page += 1) {
    const pageCanvas = document.createElement("canvas");
    pageCanvas.width = pageWidthPx;
    pageCanvas.height = pageHeightPx;
    const pageCtx = pageCanvas.getContext("2d");
    pageCtx.clearRect(0, 0, pageCanvas.width, pageCanvas.height);
    pageCtx.drawImage(sourceCanvas, 0, page * pageHeightPx, pageWidthPx, pageHeightPx, 0, 0, pageWidthPx, pageHeightPx);
    pageEntries.push({
      canvas: pageCanvas,
      streams: await transparentImageStreams(pageCanvas),
    });
  }

  const objects = [null, null];
  const pageObjectIds = [];
  const repeatedPageEntries = [];
  pageEntries.forEach((entry, page) => {
    for (let copy = 0; copy < copiesPerPage; copy += 1) {
      repeatedPageEntries.push({ ...entry, label: page });
    }
  });

  repeatedPageEntries.forEach((entry, page) => {
    const pageObjectId = objects.length + 1;
    const imageObjectId = pageObjectId + 1;
    const alphaObjectId = pageObjectId + 2;
    const contentObjectId = pageObjectId + 3;
    pageObjectIds.push(pageObjectId);
    const content = stringBytes(`q\n${pageW.toFixed(4)} 0 0 ${pageH.toFixed(4)} 0 0 cm\n/Im${page} Do\nQ\n`);

    objects.push(
      stringBytes(`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${pageW.toFixed(4)} ${pageH.toFixed(4)}] /Resources << /XObject << /Im${page} ${imageObjectId} 0 R >> >> /Contents ${contentObjectId} 0 R >>`),
      pdfStream(
        `<< /Type /XObject /Subtype /Image /Width ${entry.canvas.width} /Height ${entry.canvas.height} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /FlateDecode /SMask ${alphaObjectId} 0 R /Length ${entry.streams.compressedRgb.length} >>`,
        entry.streams.compressedRgb
      ),
      pdfStream(
        `<< /Type /XObject /Subtype /Image /Width ${entry.canvas.width} /Height ${entry.canvas.height} /ColorSpace /DeviceGray /BitsPerComponent 8 /Filter /FlateDecode /Length ${entry.streams.compressedAlpha.length} >>`,
        entry.streams.compressedAlpha
      ),
      pdfStream(`<< /Length ${content.length} >>`, content)
    );
  });

  objects[0] = stringBytes("<< /Type /Catalog /Pages 2 0 R >>");
  objects[1] = stringBytes(`<< /Type /Pages /Kids [${pageObjectIds.map((id) => `${id} 0 R`).join(" ")}] /Count ${pageObjectIds.length} >>`);
  return assemblePdf(objects);
}

function pdfStream(dictionary, bytes) {
  return [stringBytes(`${dictionary}\nstream\n`), bytes, stringBytes("\nendstream")];
}

function assemblePdf(objects) {
  const chunks = [stringBytes("%PDF-1.4\n%\xE2\xE3\xCF\xD3\n")];
  const offsets = [0];
  let length = chunks[0].length;

  objects.forEach((object, index) => {
    offsets.push(length);
    const prefix = stringBytes(`${index + 1} 0 obj\n`);
    const suffix = stringBytes("\nendobj\n");
    chunks.push(prefix);
    length += prefix.length;
    const parts = Array.isArray(object) ? object : [object];
    parts.forEach((part) => {
      chunks.push(part);
      length += part.length;
    });
    chunks.push(suffix);
    length += suffix.length;
  });

  const xrefOffset = length;
  let xref = `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  for (let i = 1; i < offsets.length; i += 1) {
    xref += `${String(offsets[i]).padStart(10, "0")} 00000 n \n`;
  }
  xref += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`;
  chunks.push(stringBytes(xref));
  length += chunks.at(-1).length;

  const pdf = new Uint8Array(length);
  let cursor = 0;
  chunks.forEach((chunk) => {
    pdf.set(chunk, cursor);
    cursor += chunk.length;
  });
  return pdf;
}

render();

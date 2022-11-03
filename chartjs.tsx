const plugin = [
    {
      id: 'custom_canvas_background_color',
      beforeDraw: (chart, args, options) => {
        const { ctx } = chart;
        ctx.restore();
        ctx.shadowColor = '#898';
        ctx.shadowBlur = 20;
        ctx.shadowOffsetX = 20;
        ctx.shadowOffsetY = 20;

        ctx.save();
      },
      defaults: {
        color: 'lightGreen',
      },
    },
  ];

  const plugins = [
    {
      beforeDraw: function (chart) {
        console.log(chart, 'chart');
        const width = chart.width,
          height = chart.height,
          ctx = chart.ctx;
        ctx.restore();
        const fontSize = (height / 160).toFixed(2);
        ctx.font = fontSize + 'em sans-serif';
        ctx.textBaseline = 'top';
        const text = 'Foo-bar',
          textX = Math.round((width - ctx.measureText(text).width) / 2),
          textY = height / 2;
        ctx.fillText(text, textX, textY);
        ctx.save();
      },
    },
  ];

  const chartRefContainer = useRef<HTMLDivElement>(null);
  const { dataWithGradient } = useHorizontalBarChartGradient({ data: barData, ref: chartRef });
  return (
    <div ref={chartRefContainer}>
      <Bar
        plugins={plugin}
        height={(BAR_THICKNESS + 28) * data.length + TICKS_PADDING}
        width={chartRefContainer?.current?.offsetWidth || undefined}
        ref={chartRef}
        options={options}
        data={dataWithGradient}
      />
    </div>
  );

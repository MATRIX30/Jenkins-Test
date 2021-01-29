package com.cyanidesystems.gceq_bank.activities;

import android.app.ProgressDialog;
import android.content.Context;
import android.graphics.Color;
import android.os.AsyncTask;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.Toast;

import com.cyanidesystems.gceq_bank.R;
import com.cyanidesystems.gceq_bank.data.QuestionDBHelper;
import com.cyanidesystems.gceq_bank.models.MultipleChoiceQuestion;
import com.jjoe64.graphview.GraphView;
import com.jjoe64.graphview.GridLabelRenderer;
import com.jjoe64.graphview.LabelFormatter;
import com.jjoe64.graphview.series.DataPoint;
import com.jjoe64.graphview.series.DataPointInterface;
import com.jjoe64.graphview.series.LineGraphSeries;
import com.jjoe64.graphview.series.OnDataPointTapListener;
import com.jjoe64.graphview.series.Series;

import java.util.ArrayList;


public class PerformanceActivity extends AppCompatActivity {
    QuestionDBHelper questionDB = new QuestionDBHelper(this);
    int numberOfTimesUiLoad=0;




    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        if(numberOfTimesUiLoad==0) {
            new LoadData(PerformanceActivity.this).execute();
            numberOfTimesUiLoad++;
        }

        setContentView(R.layout.activity_performance);


        GraphView line_graph = (GraphView) findViewById(R.id.graph);

        GridLabelRenderer gridLabel = line_graph.getGridLabelRenderer();
        gridLabel.setHorizontalAxisTitle("No of T E S T Taken");
        gridLabel.setVerticalAxisTitle("S C O R E");
        gridLabel.setVerticalAxisTitleColor(Color.parseColor("#039bef"));
        gridLabel.setGridStyle(GridLabelRenderer.GridStyle.BOTH);
        gridLabel.setHighlightZeroLines(true);
        gridLabel.setGridColor(Color.parseColor("#039bef"));
        gridLabel.setHorizontalAxisTitleColor(Color.parseColor("#039bef"));
        gridLabel.setLabelsSpace(0);
        line_graph.setTitleTextSize(40);
        LineGraphSeries<DataPoint> line_series =
                new LineGraphSeries<DataPoint>(questionDB.getPerformanceData());
        line_graph.addSeries(line_series);
        line_series.setDrawBackground(true); // activate the background feature
        line_series.setBackgroundColor(Color.parseColor("#A7D41823")); // below the line fill with color*/

        line_series.setDrawDataPoints(true);
        line_series.setThickness(2);
        line_series.setDataPointsRadius(5);
        line_series.setOnDataPointTapListener(new OnDataPointTapListener() {
            @Override
            public void onTap(Series series, DataPointInterface dataPoint) {
                Toast.makeText(PerformanceActivity.this, "Score Obtained for clicked point: " + dataPoint.getY() + "/" + String.valueOf(questionDB.getAllQuestions("'GCE'").size()), Toast.LENGTH_SHORT).show();
            }
        });
    }

    private class LoadData extends AsyncTask<Void, Integer, ArrayList<MultipleChoiceQuestion>> {
        private ProgressDialog dialog;

        public LoadData(Context context) {
            this.dialog = new ProgressDialog(context, 4);
        }

        @Override
        protected void onPreExecute() {
            super.onPreExecute();
            this.dialog.setMessage("Preparing Graph...");
            dialog.show();
        }

        @Override
        protected ArrayList<MultipleChoiceQuestion> doInBackground(Void... voids) {
            try {
                Thread.sleep(2000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            return null;
        }

        @Override
        protected void onPostExecute(ArrayList<MultipleChoiceQuestion> questions) {
            super.onPostExecute(questions);
            dialog.dismiss();
        }

    };
    }

